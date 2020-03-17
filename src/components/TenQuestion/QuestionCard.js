import React from 'react';
import he from 'he';

//shuffle the array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const QuestionCard = ({question}) => {
  if(!question) {
    return <div>Loading data ... </div>
  } else {
    const answerList = question.incorrect_answers;
    answerList.push(question.correct_answer);
    const booleanList = ['True','False'];

    const displayList = (array) => {
      return array.map( (answer) => {
        return <div className="card__answer">{answer}</div>
      })
    }

    if(question.type === "multiple") {
      return(
        <div className="card">
          <div className="card__question">{he.decode(question.question)}</div>
          <div className="card__answer-list">
            {shuffle(displayList(answerList))}
          </div>

          <div>
            Cheat: {question.correct_answer}
          </div>
          <br />
        </div>
      );
    }

    if(question.type === "boolean") {
      return(
        <div className="card">
          <div className="card__question">{question.question}</div>
          <div className="card__answer-list">
            {displayList(booleanList)}
          </div>
          <br />
        </div>
      );
    }
  };
};

export default QuestionCard;
