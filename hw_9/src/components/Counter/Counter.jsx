import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  const isCount = useSelector(state => state.counter.isCount);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div className="count">
        <h1 className="name-count"> Count: {isCount}</h1>
        <button className="btn-count" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn-count" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
