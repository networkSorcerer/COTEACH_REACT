import Box from "./component/Box";
import { useState } from "react";
import "./App.css";
function App() {
  let count = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    count = count + 1;
    setCounter2(counter2 + 1);
  };
  return (
    <div>
      <Box name="리사" num={1} />
      <Box name="제니" num={2} />
      <Box name="지수" num={3} />
      <div>{count}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
