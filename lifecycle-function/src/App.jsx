import { useEffect, useState } from "react";
import "./App.css";
import Timer from "./Timer";
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const [showTimer, setShowTimer] = useState(true);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setValue((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("앱시작!!!");
  }, []);
  useEffect(() => {
    console.log("count");
  }, [count]);
  useEffect(() => {
    console.log("value");
  }, [value]);

  return (
    <>
      <div>
        {console.log("렌더링")}
        <h1>{count}</h1>
        <h2>value:{value}</h2>
        <button onClick={handleClick}>증가</button>
        <button onClick={() => setShowTimer((prev) => !prev)}>
          타이머 보이기
        </button>
        {showTimer && <Timer />}
      </div>
    </>
  );
}

export default App;
