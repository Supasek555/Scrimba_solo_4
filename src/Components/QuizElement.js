import React from "react"

export default function QuizElement(props){

    const correct_one = [props.correct];

    const answer_array = correct_one.concat(props.incorrect)

    const random_array = shuffle(answer_array)


  

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    
      

    return(
        
    
    
    <div className="quiz_el">
      
        <h2>{props.quizQuestion}</h2>
        
        <div className="answer_grp">
            <button className="answer">{random_array[0]}</button>
            <button className="answer">{random_array[1]}</button>
            <button className="answer">{random_array[2]}</button>
            <button className="answer">{random_array[3]}</button>
        </div>
    </div>
    
    
    )
}