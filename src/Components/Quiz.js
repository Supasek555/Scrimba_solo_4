import React from "react"
import QuizElement from "./QuizElement"

export default function Quiz(props){

    
    const quizElement = props.quizList.map(myQuiz => (

        
        
        <QuizElement 

        quizQuestion ={myQuiz.question} 
        correct={myQuiz.correct_answer} 
        incorrect={myQuiz.incorrect_answers}
        
        />
    ))


    return(
        
    
    
    <div className="quiz-show">
        
       <div className="quiz_question">
        {quizElement}
       </div>
       

        <div className="button_section">
            <button className="normal">Check Answer</button>
        </div>
 
    </div>
    
    
    )
}