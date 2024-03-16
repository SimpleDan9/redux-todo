import Card from "./components/card"
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "./redux/reducer/todo-reducer"
import {useForm} from "react-hook-form"
import { nanoid } from "@reduxjs/toolkit";


function App() {
  
  const dispatch = useDispatch();
  const {handleSubmit,register,reset}= useForm()
  const {todoList,count} = useSelector((state) => state.todo)

  const submit = (data) =>{
    dispatch(addTodo({...data, id:nanoid()}))
    reset();
  }

  return (
    <>
    <h1 className="text-center mt-[20px] font-bold text-[40px]">Todo List</h1>
    <div className="container mt-[50px] flex justify-center items-center">
     <div className="div">
     <form onSubmit={handleSubmit(submit)}>
      <div>
         <input className="border-2 outline-2 outline-blue-500 border-zinc-950" {...register("name")} type="text" />
      </div>
      <div className="my-[20px]">
         <input className="border-2 outline-2 outline-blue-500 border-zinc-950" {...register("lastName")} type="text" />
      </div>
      <div>
      <button className="bg-black text-white px-[15px] py-[8px] rounded-[20px]">Add List</button>
      </div>
    </form>
    {
      todoList?.map((item) => (
        <Card key={item.id} {...item}/>
      ))
    }
     </div>
    </div>
    </>
  )
}

export default App
