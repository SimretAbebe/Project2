import React, { useState } from "react";
import "./quiz.css";
import { data } from "../../assets/data";
const quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock , setLock] = useState(false);
  let [score , setScore]=useState(0);
  const [selected, setSelected] = useState(null);
let [result , setResult]= useState(false);


  const checkAns = (ans) => {
    if (!lock) {
      setSelected(ans);
      setLock(true);
      if (question.ans === ans) {
        setScore((prev) => prev + 1);
      }
    }
  };
  
  const next = () => {
    if (lock) {
      if(index === data.length-1 ){
        setResult(true);
        return 0;
      }
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      setSelected(null); // Reset selected option
    }
  };
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }
  
  return (
    <div className="container">
      <h1>Quiz App for Interview Preparation</h1>
      <hr />
      {result ? (
        <></>
      ) : (<> <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li onClick={() => checkAns(1)} className={ lock ? question.ans === 1 ? "correct"
                    : selected === 1
                    ? "wrong"
                    : ""
                  : ""}> {question.option1}</li>
            <li onClick={() => checkAns(2)}className={lock
                  ? question.ans === 2
                    ? "correct"
                    : selected === 2
                    ? "wrong"
                    : ""
                  : "" }>{question.option2}</li>
            <li onClick={() => checkAns(3)} className={lock
                  ? question.ans === 3
                    ? "correct"
                    : selected === 3
                    ? "wrong"
                    : ""
                  : ""}>{question.option3} </li>
            <li onClick={() => checkAns(4)} className={
                lock
                  ? question.ans === 4
                    ? "correct"
                    : selected === 4
                    ? "wrong"
                    : ""
                  : "" } > {question.option4}</li>
          </ul>

          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length} question
          </div>
        </>
      )}
      {result?<> <h2> You Scored {score} out of {data.length}</h2>
      <button onClick={reset}>Reset</button></> : <></>}
     
    </div>
  );
};

export default quiz;
