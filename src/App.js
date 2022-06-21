import React from "react"
import "./style.css"
import Quiz from "./Components/Quiz";


export default function App(){

  const [isPlayed,setIsPlayed] = React.useState(false);

  const [quiz,setQuiz] = React.useState({})



       

        React.useEffect(function(){
            fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setQuiz(data.results))

         console.log(quiz)
        },[isPlayed])

        

  function play(){
    setIsPlayed(!isPlayed)

    // console.log(isPlayed)
  }



  return(
    <div className="app">

        

        <div className={isPlayed ? "reception-off" : "reception"} >
          <div className="reception_text">
            <h1>Quizzical</h1>
            <h3>Mian Soup Hei?</h3>
          </div>
         

          <button onClick={play} className="normal">Start Quiz</button>
        </div>

        {isPlayed && <Quiz quizList={quiz}/>}
        
      
      
    </div>
  )
  
  
}


