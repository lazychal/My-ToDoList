import React, {ChangeEvent} from 'react';
import './App.css';
import {TaskType} from "./types/entities";
import s from "./newStyle.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";

type TLTType = {
    task: TaskType
}
type FuncType = {
    changeStatus: (taskId: string, status: number) => void
    changeTitle: (taskId: string, title: string) => void
    deleteTask: (taskId: string) => void
}

class TodoListTask extends React.Component<TLTType & FuncType> {

    onIsDoneChanged = () => {
        let status = this.props.task.status === 2 ? 0 : 2;
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
    onHovered=(e:React.MouseEvent<HTMLSpanElement>)=>{
        let a = e;
        // debugger
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
            // </div> `${classes.Section1} ${classes.Section2}`
            <>
                <div className={s.task + ' ' + s.taskA}>
                    <span className={(this.props.task.status ? s.taskChecked : s.taskValue)}>
                        {this.state.editMode
                            ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                                     value={this.state.title}/>
                            : <span onMouseOver={this.onHovered} onClick={this.activateEditMode}>{this.props.task.title}</span>
                        }
                    </span>
                    <span className={s.FA}>
                        <FontAwesomeIcon icon={faCheck} className={s.check} onClick={this.onIsDoneChanged}/>
                        <FontAwesomeIcon icon={faTrashAlt} className={s.delete} onClick={this.onDeleteTask}/>
                    </span>

                </div>

                {/*<i className={s.check} onClick={this.onIsChecked}/>*/}
                {/*<i className={s.delete} onClick={this.onDeleteTask}/>*/}

            </>
        );
    }
}

export default TodoListTask;