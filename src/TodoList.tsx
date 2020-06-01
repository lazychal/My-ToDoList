import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {
    addNewTaskTC,
    addTaskAC, changeTaskNowTC,
    deleteTaskAC, deleteTaskNowTC, deleteTLTC,
    deleteTodolistAC,
    getTasksTC,
    setTasksAC,
    updateTodoListAC
} from "./reducer";
import {ChangeTaskType, TaskType} from "./types/entities";
import s from "./newStyle.module.css";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type MDTPType = {
    addTask: (newTask: TaskType, todolistId: string)=> void
    deleteTodolist: (todolistId: string)=> void
    deleteTask: (taskId: string, todolistId: string)=> void
    updateTodoList: (todolistId: string, title: string) => void
    getTasksT: (todoListId: string) => void
    addNewTask: (newText: string, todolistId: string) => void
    deleteTL: (todolistId: string) => void
    deleteTaskNow: (taskId: string, todolistId: string) => void
    changeTaskNow: (taskId: string, obj: ChangeTaskType, todoListId: string, tasks: Array<TaskType>) => void
}
type AnotherType = {
    id: string
    tasks: Array<TaskType>
    title: string
}

// Begin..............................

class TodoList extends React.Component<MDTPType&AnotherType> {

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        // переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        // сохраняем нашу строку в localStorage под ключом "our-state"
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    };

    restoreState = () => {
        this.props.getTasksT(this.props.id);
    };

    state = {
        filterValue: "All"
    };

    addTask = (newText: string) => {
        this.props.addNewTask(newText, this.props.id)
    };

    changeFilter = (newFilterValue: string) => {
        this.setState( {
            filterValue: newFilterValue
        }, () => { this.saveState(); });
    };

    changeTask = (taskId: string, obj: ChangeTaskType) => {
        let tasks = this.props.tasks;
        this.props.changeTaskNow(taskId, obj, this.props.id, tasks);
    };

    changeStatus = (taskId: string, status: number) => {
        debugger
        this.changeTask(taskId, {status: status});
    };

    changeTitle = (taskId: string, title: string) => {
        this.changeTask(taskId, {title: title});
    };

    deleteTodolist = () => {
        this.props.deleteTL(this.props.id);
    };

    deleteTask = (taskId: string) => {
        this.props.deleteTaskNow(taskId, this.props.id);
    };

    render = () => {
        let {tasks = []} = this.props;
        return (
                <div className={s.container}>
                    <div className="todoList-header max">
                        <span className={s.deleteTodoList} title='Delete this list'>
                            <FontAwesomeIcon icon={faTimesCircle} className={s.circle} onClick={this.deleteTodolist} />
                        </span>
                            <TodoListTitle
                                title={this.props.title}
                                todolistId={this.props.id}
                                onDelete={this.deleteTodolist}
                                updateTodoList={this.props.updateTodoList}/>
                            <AddNewItemForm addItem={this.addTask} />

                    </div>

                    <TodoListTasks changeStatus={this.changeStatus }
                                   changeTitle={this.changeTitle }
                                   deleteTask={this.deleteTask}
                                   tasks={tasks.filter((t: TaskType) => {
                        if (this.state.filterValue === "All") {
                            return true;
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false;
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true;
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
        );
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        addTask(newTask: TaskType, todolistId: string) {
            dispatch(addTaskAC(newTask, todolistId));
        },
        setTasks(tasks: Array<TaskType>, todolistId: string) {
            dispatch(setTasksAC(tasks, todolistId));
        },
        deleteTodolist: (todolistId: string) => {
            const action = deleteTodolistAC(todolistId);
            dispatch(action)
        },
        deleteTask: (taskId: string, todolistId: string) => {
            const action = deleteTaskAC(todolistId, taskId);
            dispatch(action)
        },
        updateTodoList: (todolistId: string, title: string) => {
            const action = updateTodoListAC(todolistId, title);
            dispatch(action)
        },
        getTasksT: (todoListId: string) => {
            dispatch(getTasksTC(todoListId));
        },
        addNewTask: (newText: string, todolistId: string) => {
            dispatch(addNewTaskTC(newText, todolistId));
        },
        deleteTL: (todolistId: string) => {
            dispatch(deleteTLTC(todolistId));
        },
        deleteTaskNow: (taskId: string, todolistId: string) => {
            debugger
            dispatch(deleteTaskNowTC(taskId, todolistId))
        },
        changeTaskNow: (taskId: string, obj: ChangeTaskType, todoListId: string, tasks: Array<TaskType>) => {
            dispatch(changeTaskNowTC(taskId, obj, todoListId, tasks))
        }
    }
};

const ConnectedTodolist = connect(null, mapDispatchToProps)(TodoList);

export default ConnectedTodolist;

