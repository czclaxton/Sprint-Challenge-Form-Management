import React, { useState } from "react";
import "./App.css";
import FormikForm from "./components/Form";
import Display from "./components/Display";

function App() {
  const [count, setCount] = useState(0);

  const Add = (numA, numB) => {
    return numA + numB;
  };

  return (
    <div className="App">
      <FormikForm />
      <Display count={count} setCount={setCount} />
    </div>
  );
}

export default App;
