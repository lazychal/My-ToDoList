import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {createTodoListTC, getTodolistTC} from "./reducer";
import {TodoListType} from "./types/entities";
import {AppStateType} from "./store";
import s from './newStyle.module.css'

type MDTPType = {
    addTodoList?: (title: string)=> void
    getTodolists: ()=> void
    createTodoList: (title: string)=> void
}
type MSTPType = {
    todolists: Array<TodoListType>
}

class App extends React.Component<MDTPType & MSTPType> {

    state = {
        todolists: []
    };

    addTodoList = (title: string) => {
        this.props.createTodoList(title);
    };

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.getTodolists();
    };

    render = () => {
        const todolists = this.props
            .todolists
            .map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks}/>);
            // Begin.......................
        return (
            <>
                <div className={s.MainAddNewItemForm}>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        todolists: state.todolist.todolists
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getTodolists: () => {
            dispatch(getTodolistTC())
        },
        createTodoList : (title: string) => {
            dispatch(createTodoListTC(title));
        },
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

