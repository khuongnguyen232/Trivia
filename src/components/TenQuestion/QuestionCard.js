import React from 'react';

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
        return <button type="button">{answer}</button>
      })
    }

    if(question.type === "multiple") {
      return(
        <div>
          <div>{question.question}</div>
          <div>
            {shuffle(displayList(answerList))}
          </div>
          <br />
        </div>
      );
    }

    if(question.type === "boolean") {
      return(
        <div>
          <div>{question.question}</div>
          <div>
            {displayList(booleanList)}
          </div>
          <br />
        </div>
      );
    }
  };
};

export default QuestionCard;
