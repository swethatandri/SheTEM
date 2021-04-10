import React from 'react';
import './App.css';
import Question from "./components/Question"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from './components/Button'
import Homepage from './components/Homepage'
import Answer from './components/Answer'
import {useState}  from 'react';

var index = -1;



function App() {
  const [questions, countQuestions] = useState(
    [
          
    ]

  )

   const addQuestion = (num = 0) =>
 
 {
   console.log(num);
   
   increment();  
   var questions = [{category: 'n/a',  text: 'On a scale from 1-4, how much do you enjoy math?'}, { category: 'Science', text: 'Are you curious about the world around you?'}, { category: 'Science', text: 'Did you enjoy watching Bill Nye the Science Guy as a child?'}, { category: 'Tech', text: 'Do you like coding but don’t know what you want to do in general?'},{ category: 'Tech', text: 'Do you like code but design makes you sick?'}, { category: 'Tech', text: 'Do you run your code or does your code run you?'}, {category: 'Tech', text: 'Are you the type of person that uses the google chrome generated questions?'}]
   countQuestions([questions[index]])
 }



 function increment()
 {
   index++;
 }
 
 function questionVal(q)
 {
   var val = 0;
   return val;
 }
 
 function questionType(q)
 {
   var type = question.category
   //retrieve type/category of question being displayed
   return type;  
 }
 
  return (
    <div>
    <Header />
    <Button text = "Begin Activity" onClick = {addQuestion} />
    {questions.map((question) => (<Question question = {question.text} addQuestion = {addQuestion} /> ) )}
    <Footer />
    </div>
  );
}


export default App;