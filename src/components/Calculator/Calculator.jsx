import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding, divide, multiply, subtract } from "./calculatorSlice";

function Calculator() {
  const result = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="inputs">
        <input type="text" value={val1} onChange={(e)=>setVal1(e.target.value)}/>
        <input type="text" value={val2} onChange={(e)=>setVal2(e.target.value)}/>
      </div>

      <h3>{result}</h3>
      
      <div className="operators">
        <button onClick={()=>dispatch(adding({num1:+val1,num2:+val2}))}>+</button>
        <button onClick={()=>dispatch(subtract({num1:+val1,num2:+val2}))}>-</button>
        <button onClick={()=>dispatch(multiply({num1:+val1,num2:+val2}))}>*</button>
        <button onClick={()=>dispatch(divide({num1:+val1,num2:+val2}))}>/</button>
      </div>
    </div>
  );
}

export default Calculator;