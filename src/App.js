import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [input, setInput] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");

  const addToInput = (val) => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput("");
  };

  const add = () => {
    setPreviousNumber(input);
    setInput("");
    setOperator("plus");
  };

  const subtract = () => {
    setPreviousNumber(input);
    setInput("");
    setOperator("subtract");
  };

  const multiply = () => {
    setPreviousNumber(input);
    setInput("");
    setOperator("multiply");
  };

  const divide = () => {
    setPreviousNumber(input);
    setInput("");
    setOperator("divide");
  };

  const evaluate = () => {
    console.log(previousNumber);
    console.log(input);

    if (operator === "plus") {
      setInput(parseInt(previousNumber) + parseInt(input));
    } else if (operator === "subtract") {
      setInput(parseInt(previousNumber) - parseInt(input));
    } else if (operator === "multiply") {
      setInput(parseInt(previousNumber) * parseInt(input));
    } else if (operator === "divide") {
      setInput(parseInt(previousNumber) / parseInt(input));
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <div className="input">{input}</div>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button handleClick={subtract}>-</Button>
        </div>
        <div className="row">
          <button className="clear-btn" onClick={clearInput}>
            Clear
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
