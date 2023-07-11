import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div>
          <button className="bg-green-700 text-white font-bold py-2 px-4 rounded">
            Increment
          </button>
        </div>
        <p className="text-2xl">&nbsp; &nbsp;{count}&nbsp; &nbsp;</p>
        <div>
          <button className="bg-red-700 text-white font-bold py-2 px-4 rounded">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
