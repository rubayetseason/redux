import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
        </div>
        &nbsp;
        <div>
          <button
            onClick={() => dispatch(incrementByAmount(7))}
            className="bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment by value
          </button>
        </div>
        <p className="text-2xl">&nbsp; &nbsp;{count}&nbsp; &nbsp;</p>
        <div>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
