import React, {useState} from "react";
import './App.css';
import ButtonRaw from './ButtonRow';

function App () {
  const [input, setinput] = useState('');


  const handleButtonClick = (val) =>{
    if(val === 'C')
      setinput('');
    else if(val === '<')
      setinput(input.slice(0,-1));
    else if(val === '=')
    {
      try{
        setinput(eval(input).toString());
      }
      catch{
        setinput('Error');
      }
    }
    else
    {
      if(input==="Error")
        setinput('')
      setinput((preValue)=> preValue + val);
    }

  }



  // const CalculateResult = (input) => {
  //   try {
  //     const operators = ['+', '-', '*', '/', '%'];
  //     let operator = null;
  
  //     // Find the first operator
  //     for (let i = 0; i < input.length; i++) {
  //       if (operators.includes(input[i])) {
  //         operator = input[i];
  //         break;
  //       }
  //     }
  
  //     // If no operator, try parsing the number
  //     if (!operator) {
  //       setinput(parseFloat(input).toString());
  //       return;
  //     }
  
  //     // Split the input into two operands
  //     const [operand1, operand2] = input.split(operator).map(Number);
  
  //     // Check if both operands are valid numbers
  //     if (isNaN(operand1) || isNaN(operand2)) {
  //       throw new Error('Invalid operands');
  //     }
  
  //     let result;
  //     switch (operator) {
  //       case '+':
  //         result = operand1 + operand2;
  //         break;
  //       case '-':
  //         result = operand1 - operand2;
  //         break;
  //       case '*':
  //         result = operand1 * operand2;
  //         break;
  //       case '/':
  //         if (operand2 === 0) throw new Error('Division by zero');
  //         result = operand1 / operand2;
  //         break;
  //       case '%':
  //         result = operand1 % operand2;
  //         break;
  //       default:
  //         throw new Error('Invalid operator');
  //     }
  
  //     // Corrected to .toString()
  //     setinput(result.toString());
  //   } catch {
  //     setinput('Error');
  //   }
  // };




  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{input}</h1>
        <ButtonRaw value={['C', '<', '%', '/']} onClick={handleButtonClick}/>
        <ButtonRaw value={['7', '8', '9', '*']} onClick={handleButtonClick}/>
        <ButtonRaw value={['4', '5', '6', '-']} onClick={handleButtonClick}/>
        <ButtonRaw value={['1', '2', '3', '+']} onClick={handleButtonClick}/>
        <ButtonRaw value={['0', '00', '.', '=']} onClick={handleButtonClick}/>
      </div>
    </div>
  );
}

export default App;
