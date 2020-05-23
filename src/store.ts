import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todolist: reducer
});

type RootReducer = typeof rootReducer
export type AppStateType = ReturnType<RootReducer>


const store = createStore(rootReducer, applyMiddleware(thunk));
// window.store = store;
export default store;
