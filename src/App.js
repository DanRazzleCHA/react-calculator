import { useState } from "react";
import { SlCalculator } from "react-icons/sl";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { H1 } from "./components/H1";

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
    
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    setOperator('+');
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setOperator('-');
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setOperator('*');
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setOperator('/');
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult('Cannot divide by zero');
    }
  };
  


  return (
    <div className="card">
      <H1>
        <SlCalculator />
        React Calculator
      </H1>
      <H1>{result ? result : "Enter a number"}</H1>
      <Input 
        type="number" 
        defaultValue={num1}
        placeholder="Enter your first number" 
        onChange={handleNum1Change} 
        required
      />
      <Input 
        type="number" 
        defaultValue={num2}
        placeholder="Enter your second number"  
        onChange={handleNum2Change}
        required
      />
      <Button onClick={handleAdd}>+</Button>
      <Button onClick={handleSubtract}>-</Button>
      <Button onClick ={handleMultiply}>*</Button>
      <Button onClick={handleDivide}>/</Button>
    </div>
  );
}

export default App;
