import { evaluate, index, number } from 'mathjs'
import './App.css'
import { useState } from 'react'
function App(){
const [buttons,setButtons] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+" ,"-", "*", "/", "¬", "()", "Ans", "c"])
const[display,setDisplay] = useState("")
const math = (number) => {
  if(number==="Ans"){
    setDisplay(evaluate(display))
    return 
  }
  if(number=== "c"){
    setDisplay("")
    return
  }
  setDisplay(display+number)
  
}

  return (
      <div className='calculator'>
        <h1>{display}</h1>
        <div className='bottons'>

      
        {buttons.map((number,index) => {
          return<button key = {index} onClick={ () => math (number) }>{number}</button>
          
    })}
</div>
  
   </div>
        
  );
};

export default App
