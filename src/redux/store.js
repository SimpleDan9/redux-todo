import { configureStore, createListenerMiddleware} from "@reduxjs/toolkit";
import countSlice from "./reducer/count-reducer"
import todoSlice from "./reducer/todo-reducer"
import { saveState } from "../config/storage";
import { addTodo,deleteTodo,totalCount,editTodo } from "./reducer/todo-reducer";

const storageMiddleware = createListenerMiddleware()
export const store = configureStore({
     reducer:{
        countt:countSlice,
        todo:todoSlice,
     },
    
})

store.subscribe(()=>{
    saveState("todo", store.getState().todo)
});