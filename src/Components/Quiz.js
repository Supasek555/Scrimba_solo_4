import React from "react"
import QuizElement from "./QuizElement"

export default function Quiz(props){

    
    const quizElement = props.quizList.map(myQuiz => (
        
        <QuizElement quizQuestion ={myQuiz.question} />
    ))


    return(
        
    
    
    <div className="quiz-show">
        
       
        {quizElement}


        <button className="normal">Check Answer</button>
    </div>
    
    
    )
}