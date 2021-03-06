import './App.css';
import React, { useState } from 'react';
import Data from './data.json';
import Result from './result';

function App() {

  const[currentQuestion, setCurrentQuestion] = useState(0);
  const[score, setScore] = useState(0)

  return (
    <div>
      { currentQuestion === Data.length ? <Result score={score} /> :
        <div>
          <h2>{ Data[currentQuestion].question }</h2>
          {
            Data[currentQuestion].option.map((opt) => {
              return <input key={currentQuestion+opt} type="button" value={opt} onClick={(event) => {
                event.target.value === Data[currentQuestion].answer ? setScore(score+1) : <></>
                setCurrentQuestion(currentQuestion+1)
              }} />
            })
          }
        </div>
      }
    </div>
  );
}

export default App;
