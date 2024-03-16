import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

 const initialState = loadState("todo") || {
    todoList:[],
    count: 0,
 }

const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
         addTodo:(state,action)=> {
            
            return {...state,todoList:[...state.todoList, action.payload]}
         },
         deleteTodo:(state, action)=> {
            return {...state,todoList:state.todoList.filter((item)=> item.id !== action.payload.id )}
         },
         totalCount : (state)=>{
            return {...state, count:state.todoList.length }
         },
         editTodo : (state, action)=> {
            const {id, newItem} = action.payload;
            const index = state.todo.filter(item => item.id === id)
            if (index !== -1){
               state.todo[index]= newItem
            }
         }
    }
})

export default todoSlice.reducer;

export const {addTodo,deleteTodo,totalCount,editTodo} = todoSlice.actions;