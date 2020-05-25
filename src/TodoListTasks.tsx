import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import {TaskType} from "./types/entities";
import s from "./newStyle.module.css";

type FuncType = {
    changeStatus: (taskId: string, status: number) => void
    changeTitle: (taskId: string, title: string) => void
    deleteTask: (taskId: string) => void
}
type TLTType = {
    tasks: Array<TaskType>
}


// Begin............

class TodoListTasks extends React.Component<FuncType & TLTType> {
    render = () => {
        let tasksElements = this.props.tasks.map(
            task => <TodoListTask task={task}
                                  changeStatus={this.props.changeStatus}
                                  changeTitle={this.props.changeTitle}
                                  deleteTask={this.props.deleteTask}
            />);

        return (
            <div className={s.list}>
                <div className={s.taskContainer}>
                    {tasksElements}
                </div>
            </div>
        );
    }
}

export default TodoListTasks;

