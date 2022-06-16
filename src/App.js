import React from "react"
import "./style.css"
import Quiz from "./Components/Quiz";


export default function App(){

  const [isPlayed,setIsPlayed] = React.useState(false);

  function play(){
    setIsPlayed(!isPlayed)

    console.log(isPlayed)
  }



  return(
    <div className="app">

        

        <div className={isPlayed ? "reception-off" : "reception"} >
          <div className="reception_text">
            <h1>Jum Reap Suo</h1>
            <h3>Mian Soup Hei?</h3>
          </div>
         

          <button onClick={play}>Start Quiz</button>
        </div>
        
      
      
    </div>
  )
  
  
}


