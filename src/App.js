
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';



function App() {

  const[countT,setCountT]= useState(0)
  const[countF,setCountF]= useState(0)
  const [questions,setQuestions] = useState([])
  const[input,setInput]= useState("")


  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((resp) => resp.json())
      .then((questionsData) => setQuestions(questionsData))
  },[])

const problems=questions.map((question)=>(
    <div key={question.id}> 
        <p>
          problem:{question.problem}
        </p>
        {question.picture && (<img src={question.picture} alt={question.picName}/>)}
    </div>
  ))


  const counterT=()=>{
  setCountT(countT +1)
  }
  const lowerCountT=()=>{
    if (countT > 0) {
      setCountT(countT -1)}
  }

  const counterF=()=>{
    setCountF(countF +1)
    }
    const lowerCountF=()=>{
      if(countF > 0){
      setCountF(countF -1)}
    }

  const handleYoLegsButton=()=>{
    alert("yo Legs Stank")
  }

    const handleInput=(e)=>{
      setInput(e.target.value)
    }

    const handleSubmit=()=>{
      // if input ===  question.problem.answer
    }
    


  return (
    <div className="App">
      <Navbar/>
     <h1> Welcome</h1>
     
     <button className="yoLegs"onClick={handleYoLegsButton}>"yo legs" Button</button>
     
      {problems}
      
  
        <div className='Tim'>
          <h2>Tim's Score  {countT}</h2>
          <form onSubmit={handleSubmit}>
            <input onChange={handleInput} ></input>
           
             <button >submit</button>
             
          </form>
          <button onClick={counterT}>increment</button>
         <br></br>
        </div>
      <br></br>

        <div className="Franco">
          <h2>Franco's score {countF}</h2>
          <form>
            <input></input>
              <button>submit</button>
           </form>
           <button onClick={counterF}>increment</button>
          <br></br>
        </div>
        
      
  <br></br>
  <br></br>
  <br></br>
    </div>
  );
}

export default App;
