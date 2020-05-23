import axios from 'axios';
import {TaskType} from "./types/entities";

type AddTodoListResponseType = {
    data: {
        item: TaskType
    }
    resultCode: number
    messages: Array<string>
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "08777951-79e8-4107-8dc3-392484b36531"}
});


export const api = {
    getTodolists (){
        return instance.get('')
    },
    updateTask (t: TaskType, obj: any){
        return instance.put(`/tasks`,{...t, ...obj})
    },
    createTodolist (title: string){
        return instance.post<AddTodoListResponseType>('',{title: title})
    },
    deleteTodolist (todolistId: string){
        return instance.delete('' + todolistId)
    },
    getTasks (todolistId: string){
        return instance.get(`/${todolistId}/tasks`)
    },
    createTask(newText: string, todolistId: string){
        return instance.post(`/${todolistId}/tasks`,{title: newText})
    },
    deleteTask(taskId: string, todolistId: string){
        return instance.delete(`/tasks/${taskId}`)
    },
    updateTodoList(todolistId: string, newTitle: string){
        return instance.put(`/${todolistId}`, {title: newTitle})
    },

};