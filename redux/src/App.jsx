import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <div>
        <h1>
          {id}
          {password}
        </h1>
        <h1>{count}</h1>
        <button onClick={increase}>증가</button>
        <button onClick={decrement}>감소!</button>
        <button onClick={login}>Login</button>
        <Box />
      </div>
    </>
  );
}

export default App;
