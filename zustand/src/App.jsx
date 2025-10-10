import { useState } from "react";

import "./App.css";
import CountBox from "./components/CountBox";
import counterStore from "./stores/counterStore";

function App() {
  const { count, increase, decrease, increaseBy } = counterStore();
  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <CountBox count={count} />
        <button onClick={increase}>increase</button>
        <button onClick={() => increaseBy(10)}>10씩 증가</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </>
  );
}

export default App;
