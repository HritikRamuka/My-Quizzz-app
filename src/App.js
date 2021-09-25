import React, { useState } from 'react';
import questions from "./components/data"
import Trivia from "./components/Trivia"
import Start from "./components/Start"

import "./App.css"
export default function App() {
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [username, setUsername] = useState(null)

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (<>
            <h1 className="title">My quizzz</h1>

		<div className='app'>
{username?
      <>
      {showScore ? (
				   <div className='score-section'>

				   <span className="scoreCard"> {username},your score is {score}/{questions.length} </span>
				   <div className="score">
				   <span >correct answer : {score}</span>
				   <span >incorrect answer :{questions.length-score}</span>
				   </div>
				   
				   </div> 
			) : (
				<>
					<Trivia
					currentQuestion={currentQuestion}
			
					handleAnswerOptionClick={ handleAnswerOptionClick}
					/>
            </>
          )}
          </>:<Start username={username}
            setUsername={setUsername}/>}

        </div>
		</>
      );
    }