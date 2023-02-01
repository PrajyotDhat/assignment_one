import React, { useState } from 'react'
import "./App.css";

function App() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const handleAdd = (e) => {
    e.preventDefault();
    const addition = parseInt(num1) + parseInt(num2);
    setResult(addition);
  }

  const handleSub = (e) => {
    e.preventDefault();
    const substraction = parseInt(num1) - parseInt(num2);
    setResult(substraction);
  }

  const handleMul = (e) => {
    e.preventDefault();
    const multiplication = parseInt(num1) * parseInt(num2);
    setResult(multiplication);
  }

  const handleDiv = (e) => {
    e.preventDefault();
    const division = parseInt(num1) / parseInt(num2);
    setResult(division);
  }

  return (
    <div className="app">

      <div className="container">

        <h2 className="center">Calculator</h2>

        <form>

          <div>
            <label className='num'>Number 1</label>
            <input type="text" placeholder="Enter the number" required value={num1} onChange={(e) => setNum1(e.target.value)} />
          </div>

          <div>
            <label className='num'>Number 2</label>
            <input type="text" placeholder="Enter the number" required value={num2} onChange={(e) => setNum2(e.target.value)} />
          </div>

          <div className="btn">
            <button id="btn-one" type="submit" onClick={handleAdd}>Add</button>
            <button id="btn-two" type="submit" onClick={handleSub}>Sub</button>
            <button id="btn-three" type="submit" onClick={handleMul}>Mul</button>
            <button id="btn-four" type="submit" onClick={handleDiv}>Div</button>
          </div>

          <div className="center">
            <h3>The Result is : {result}</h3>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
