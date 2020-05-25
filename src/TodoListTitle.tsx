import React, {ChangeEvent} from 'react';
import './App.css';
import {api} from "./api";
import s from "./newStyle.module.css";

type FuncType = {
    updateTodoList: (todolistId: string, newTitle: string) => void
    onDelete: () => void
}
type TLTType = {
    title: string
    todolistId: string
}

class TodoListTitle extends React.Component<TLTType&FuncType> {
    state = {
        editMode: false,
        title: this.props.title
    };
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.changeTodolistTitle(this.props.todolistId, this.state.title);
    };
    activateEditMode = () => {
        this.setState({editMode: true});

    };
    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value})
    };
    changeTodolistTitle = (todolistId: string, newTitle: string) => {
                api.updateTodoList(todolistId, newTitle)
                    .then(res => {
                        this.props.updateTodoList(todolistId, newTitle);
                    });
            };

// Begin........ Перед бегином обернул всё в дивку className={s.title}
   render = () => {
        return (
            <div className={s.title}>
                <h3 className="todoList-header__title">
                    { this.state.editMode
                        ? <input
                            onBlur={this.deactivateEditMode}
                            onChange={this.onTitleChanged}
                            autoFocus={true}
                            value={this.state.title}
                        />
                        :
                        <span
                            onClick={this.activateEditMode}
                        >{this.props.title}</span>
                    }

                    <button onClick={this.props.onDelete}>X</button></h3>
            </div>
        );
    }
}

export default TodoListTitle;

