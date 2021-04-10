import React from 'react'
import Button from './Button'
import Answer from './Answer'


const Question = ({question, addQuestion}) => {


    return (
        <div class = "questionStyle">

        <h3> {question} </h3>

        <div class = "yesno">

        <Answer value = {"value"} addQuestion = {addQuestion} />

        
        

        

        


        

       

        </div>


        
           

            
        </div>
    )
}



export default Question
