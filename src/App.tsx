import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Approuters from "./AppRouters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Approuters />
    </div>
  );
}

export default App;
