
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const[countT,setCountT]= useState(0)
  const[countF,setCountF]= useState(0)
  const [questions,setQuestions] = useState([])
  const[input,setInput]= useState("")

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then((resp) => resp.json())
      .then((questionsData) => setQuestions(questionsData))
  },[])

const problems=questions.map((question)=>(
    <div key={question.id}> 
        <p>
          problem:{question.problem}
        </p>
    </div>
  )
    )


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

    const handleInput=(e)=>{
      setInput(e.target.value)
    }

    const handleSubmit=()=>{
      // if input ===  question.problem.answer
    }

  return (
    <div className="App">
     <h1> Welcome</h1>
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
          <br></br>
        </div>
      
  
    </div>
  );
}

export default App;
