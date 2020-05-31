import {api} from "./api";
import {ChangeTaskType, TaskType, TodoListType} from "./types/entities";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

export const ADD_TODOLIST = "TodoList/Reducer/ADD-TODOLIST";
export const DELETE_TODOLIST = "TodoList/Reducer/DELETE-TODOLIST";
export const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
export const ADD_TASK = "TodoList/Reducer/ADD-TASK";
export const SET_TASKS = "TodoList/Reducer/SET_TASKS";
export const UPDATE_TASK = "TodoList/Reducer/UPDATE-TASK";
export const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";
export const UPDATE_TODOLIST = "TodoList/Reducer/UPDATE_TODOLIST";

type InitialStateType = {
    todolists: Array<TodoListType>
}

const initialState: InitialStateType = {
    "todolists": []
};

const reducer = (state: InitialStateType = initialState, action: TodoActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            };
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            };
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            };
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map((tl: TodoListType) => {
                    if (tl.id === action.todolistId && tl.tasks) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map((tl: TodoListType)  => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map((t: TaskType) => {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            title: action.title
                        }
                    } else {
                        return tl
                    }
                })
            }
    }
    console.log("reducer: ", action);
    return state;
};

type UpdateTodoListACType = {
    type: typeof UPDATE_TODOLIST
    todolistId: string
    title: string
}
type UpdateTaskACType = {
    type: typeof UPDATE_TASK
    taskId: string
    obj: ChangeTaskType
    todolistId: string
}
type DeleteTodolistACType = {
    type: typeof DELETE_TODOLIST
    todolistId: string
}
type DeleteTaskACType = {
    type: typeof DELETE_TASK
    todolistId: string
    taskId: string
}
type AddTaskACType = {
    type: typeof ADD_TASK
    todolistId: string
    newTask: TaskType
}
type SetTasksACType = {
    type: typeof SET_TASKS
    todolistId: string
    tasks: Array<TaskType>
}
type AddTodolistACType = {
    type: typeof ADD_TODOLIST
    newTodolist: TodoListType
}
type SetTodolistsACType = {
    type: typeof SET_TODOLISTS
    todolists: Array<TodoListType>
}

export type TodoActionTypes = UpdateTodoListACType|UpdateTaskACType|DeleteTodolistACType|DeleteTaskACType
                        |AddTaskACType|SetTasksACType|AddTodolistACType|SetTodolistsACType

export const updateTodoListAC = (todolistId: string, title: string): UpdateTodoListACType => {
    return {type: UPDATE_TODOLIST, todolistId, title}
};
export const updateTaskAC = (taskId: string, obj: ChangeTaskType, todolistId: string, tasks: Array<TaskType>): UpdateTaskACType => {
    return {type: UPDATE_TASK, taskId, obj, todolistId};
};
export const deleteTodolistAC = (todolistId: string): DeleteTodolistACType => {
    return {type: DELETE_TODOLIST, todolistId: todolistId};
};
export const deleteTaskAC = (taskId: string, todolistId: string): DeleteTaskACType => {
    return {type: DELETE_TASK, todolistId, taskId};
};
export const addTaskAC = (newTask: TaskType, todolistId: string): AddTaskACType => {
    return {type: ADD_TASK, newTask, todolistId};
};
export const setTasksAC = (tasks: Array<TaskType>, todolistId: string): SetTasksACType => {
    return {type: SET_TASKS, tasks, todolistId};
};
export const addTodolistAC = (newTodolist: TodoListType): AddTodolistACType => {
    return {type: ADD_TODOLIST, newTodolist: newTodolist}
};
export const setTodolistsAC = (todolists: Array<TodoListType>): SetTodolistsACType => {
    return {type: SET_TODOLISTS,todolists: todolists}
};

//Thunk
export type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, TodoActionTypes>
export const getTodolistTC = (): ThunkActionType => async (dispatch) => {
    api.getTodolists()
        .then(res => {
            dispatch(setTodolistsAC(res.data))
        })
};
export const createTodoListTC = (title: string): ThunkActionType => async (dispatch) => {
    api.createTodolist(title)
        .then(res => {
            let todolist = res.data.data.item;
            dispatch(addTodolistAC({...todolist, tasks: []}));
        });
};
export const getTasksTC = (todolisId: string): ThunkActionType => async (dispatch) => {
    api.getTasks(todolisId)
        .then(res => {
            let allTasks = res.data.items;
            dispatch(setTasksAC(allTasks, todolisId));
        });
};
export const addNewTaskTC = (newTask: string, todolistId: string): ThunkActionType => async (dispatch) => {
    api.createTask(newTask, todolistId)
        .then(res => {
            let newTask = res.data.data.item;
            dispatch(addTaskAC(newTask, todolistId));
        });
};
export const deleteTLTC = (todolistId: string): ThunkActionType => async (dispatch) => {
    api.deleteTodolist(todolistId)
        .then(() => {
            dispatch(deleteTodolistAC(todolistId));
        });
};

export const deleteTaskNowTC = (taskId: string, todolistId: string): ThunkActionType => async (dispatch) => {
    api.deleteTask(taskId, todolistId)
        .then(res => {
            dispatch(deleteTaskAC(taskId, todolistId));
        });
};
export const changeTaskNowTC = (taskId: string, obj: ChangeTaskType, todoListId: string, tasks: Array <TaskType>): ThunkActionType =>
    async (dispatch) => {
    tasks.forEach(t => {
        if (t.id === taskId) {
            debugger
            api.updateTask(t, obj)
                .then(res => {

                    let changedTask = res.data.data.item;
                    dispatch(updateTaskAC(taskId, changedTask, todoListId, tasks));
                });
        }
    })
};


export default reducer;
