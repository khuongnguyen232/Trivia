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
        return <button type="button">{answer}</button>
      })
    }

    if(question.type === "multiple") {
      return(
        <div>
          <div>{he.decode(question.question)}</div>
          <div>
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
