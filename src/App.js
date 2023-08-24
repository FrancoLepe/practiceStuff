
import './App.css';
import { useState } from 'react';



function App() {

  const[count,setCount]= useState(0)

  const[countF,setCountF]= useState(0)

  const counter=()=>{
  // e.target.value()
  setCount(count +1)
  }
  const lowerCount=()=>{
    setCount(count -1)
  }

  const counterF=()=>{
    // e.target.value()
    setCountF(countF +1)
    }
    const lowerCountF=()=>{
      setCountF(countF -1)
    }

  return (
    <div className="App">
     <h1> Welcome</h1>
      
  
        <div className='Tim'>
          <h2>Tim's Score  {count}</h2>
          <button  onClick={counter}>Increment</button>
          <button  onClick={lowerCount}>Decrement</button>
        
        </div>
      <br></br>

        <div className="Franco">
          <h2>Franco's score {countF}</h2>
        
          <button  onClick={counterF}>Increment</button>
          <button  onClick={lowerCountF}>Decrement</button>
        </div>
      
  
    </div>
  );
}

export default App;
