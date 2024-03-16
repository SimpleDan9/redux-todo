import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../redux/reducer/count-reducer";


function Card2() {
  const {count} = useSelector((state) => state.countt)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
     <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
}

export default Card2;
