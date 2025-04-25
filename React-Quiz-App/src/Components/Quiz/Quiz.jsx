import { useState , useRef } from 'react'
import data from '../../../src/Assets/data.js'
import './Quiz.css'

const Quiz = () => {
   let [index,setIndex] = useState(0);

   let [questions,setQuestion] = useState(data[index]);

   let[lock,setLock] = useState(false); 

   let[score,setScore] = useState(0);

   let Option1 = useRef(null);
   let Option2 = useRef(null);
   let Option3 = useRef(null);
   let Option4 = useRef(null); 

   let Option_array = [Option1,Option2,Option3,Option4]

  const checkAns = (e,ans) =>{
    if(lock === false){
       if(questions.answer === ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev+1);
       }
        else{
        e.target.classList.add("wrong");
        setLock(true);
        Option_array[questions.answer-1].current.classList.add("correct")
      }
    }
  } 
  
  const Next = () =>{
     if(lock === true){
       setIndex(++index);
       setQuestion(index);
       setLock(false);
       Option_array.map((option) =>{
           option.current.classList.remove("correct");
           option.current.classList.remove("wrong");
           return null;
       })
     }
  }
  return (
    <>
      <div className="container">
         <h1>Quiz App</h1>
         <hr />
         <h2>
           {questions.question}
         </h2>
         <ul>
          <li ref={Option1} onClick={(e) =>{
            checkAns(e,1)
          }}>{questions.option1}</li>
          <li ref={Option2} onClick={(e) =>{
            checkAns(e,2)
          }}>{questions.option2}</li>
          <li ref={Option3} onClick={(e) =>{
            checkAns(e,3)
          }}>{questions.option3}</li>
          <li ref={Option4} onClick={(e) =>{
            checkAns(e,4)
          }}>{questions.option4}</li>
         </ul>
          <button className="btu" onClick={Next}>
            Next
          </button>
          <div className="index">
            {score} of {data.length} qustions
          </div>
      </div>
    </>
  )
}

export default Quiz
