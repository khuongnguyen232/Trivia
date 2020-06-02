import React from 'react';

import QuestionCard from './QuestionCard';

const QuestionList = ({list,addScore,addNumAnswer}) => {
  if(!list) {
    return <div>Loading data ... </div>
  } else {
    const displayList = list.map( (question) => {
      return <QuestionCard question={question} key={question.question} addScore={addScore} addNumAnswer={addNumAnswer}/>
    })
    return(
        <div className="list-section">
          {displayList}
        </div>
    );
  };
};

export default QuestionList;
