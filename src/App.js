
import './App.css';
import { useState } from 'react';



function App() {

  const[countT,setCountT]= useState(0)

  const[countF,setCountF]= useState(0)

  const counterT=()=>{
  // e.target.value()
  setCountT(countT +1)
  }
  const lowerCountT=()=>{
    setCountT(countT -1)
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
          <h2>Tim's Score  {countT}</h2>
          <button  onClick={counterT}>Increment</button>
          <button  onClick={lowerCountT}>Decrement</button>
        
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
