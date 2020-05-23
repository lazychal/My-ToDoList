import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import {TaskType} from "./types/entities";

type FuncType = {
    changeStatus: (taskId: string, status: number) => void
    changeTitle: (taskId: string, title: string) => void
    deleteTask: (taskId: string) => void
}
type TLTType = {
    tasks: Array<TaskType>
}

class TodoListTasks extends React.Component<FuncType & TLTType> {
    render = () => {
        let tasksElements = this.props.tasks.map(
            task => <TodoListTask task={task} changeStatus={this.props.changeStatus}
                                  changeTitle={this.props.changeTitle}
                                  deleteTask={this.props.deleteTask}
            />);

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

