import React, {ChangeEvent} from 'react';
import './App.css';
import {TaskType} from "./types/entities";
import s from "./newStyle.module.css";

type TLTType = {
    task: TaskType
}
type FuncType = {
    changeStatus: (taskId: string, status: number) => void
    changeTitle: (taskId: string, title: string) => void
    deleteTask: (taskId: string) => void
}

class TodoListTask extends React.Component<TLTType & FuncType> {

    onIsDoneChanged = (e: ChangeEvent<HTMLInputElement>) => {
        let status = e.currentTarget.checked ? 2 : 0;
        this.props.changeStatus(this.props.task.id, status);
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value})
    };

    state = {
        editMode: false,
        title: this.props.task.title,
        isChecked: false,
    };

    activateEditMode = () => {
        this.setState({editMode: true});

    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.changeTitle(this.props.task.id, this.state.title);
    };
    onDeleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };
    onIsChecked = () => {
        this.setState({isChecked: true})
    };

    //Begin......................

    render = () => {
        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        let priotityTitle = "";
        switch (this.props.task.priority) {
            case 0:
                priotityTitle = "Low";
                break;
            case 1:
                priotityTitle = "Middle";
                break;
            case 2:
                priotityTitle = "High";
                break;
            case 3:
                priotityTitle = "Urgently";
                break;
            case 4:
                priotityTitle = "Later";
                break;
        }
        return (
            // <div className={s.task}>
            //     <input type="checkbox" checked={this.props.task.status === 2}
            //            onChange={this.onIsDoneChanged}/>
            //     {this.state.editMode
            //         ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
            //                  value={this.state.title}/>
            //         : <span onClick={this.activateEditMode}>{this.props.task.title}</span>
            //     }, priority: {priotityTitle}
            //     <button onClick={this.onDeleteTask}>X</button>
            // </div>
            <>
                <p className={this.state.isChecked ? s.taskChecked : s.task}>
                    {this.state.editMode
                        ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                                 value={this.state.title}/>
                        : <span onClick={this.activateEditMode}>{this.props.task.title}</span>
                    }
                    {/*{this.state.title}*/}
                </p>
                <i className={s.check} onClick={this.onIsChecked}/>
                <i className={s.delete} onClick={this.onDeleteTask}/>

            </>
        );
    }
}

export default TodoListTask;