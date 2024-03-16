import { deleteTodo, editTodo } from "../redux/reducer/todo-reducer";
import { useDispatch } from "react-redux";

function Card({name, lastName, id}) {

  const dispatch = useDispatch();
  const handleUpdate = (id, newName) => {
    dispatch(editTodo({ id, newItem: { id, name: newName } }));
  };

  console.log("Card render")
  return (
   
     
      <div className= "border-2 text-center rounded-[15px] my-[20px] bg-yellow-200">
         <div className="px-[10px]">
           <h1>{name}</h1>
           <h2>{lastName}</h2>
        <div className="flex justify-center gap-[10px]"> 
           <button
             className=" my-[15px] border-2 rounded-[10px] py-[5px] px-[12px] bg-white"
             onClick={() => dispatch(deleteTodo({id}))}>delete</button>
                <button
            className=" my-[15px] border-2 rounded-[10px] py-[5px] px-[12px] bg-white"
            onClick={handleUpdate}>Edit</button>

        </div>
          </div>
      </div>
  );
}

export default Card;
