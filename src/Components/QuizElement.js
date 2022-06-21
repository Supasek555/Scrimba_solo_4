import React from "react"

export default function QuizElement(props){



    return(
        
    
    
    <div className="quiz_el">
      
        <h2>{props.quizQuestion}</h2>
        
        <div className="answer_grp">
            <button className="answer">1</button>
            <button className="answer">2</button>
            <button className="answer">3</button>
            <button className="answer">4</button>
        </div>
    </div>
    
    
    )
}