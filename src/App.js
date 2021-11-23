import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCounter, subCounter } from "./store/modules/counter/actions";

function App() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <span>Contador: {counter}</span>
        <button onClick={() => dispatch(addCounter(1))}>Adicionar</button>
        <button onClick={() => dispatch(subCounter(1))}>Diminuir</button>
      </header>
    </div>
  );
}

export default App;
