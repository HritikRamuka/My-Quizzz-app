import React from 'react'
import questions from "./data"

const Trivia = ({currentQuestion, handleAnswerOptionClick})=>{

          
    

    return (
        <div className="trivia">

<div className='question-section'>
						<div className='question-count'>
							<span className="question-num">Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button className="buttonAnswer" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
        </div>
    )

           }
export default Trivia
