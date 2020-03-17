import React from 'react';

import QuestionCard from './QuestionCard';

const QuestionList = ({list}) => {
  if(!list) {
    return <div>Loading data ... </div>
  } else {
    const displayList = list.map( (question) => {
      return <QuestionCard question={question} key={question.question}/>
    })
    return(
        <div>
          {displayList}
        </div>
    );
  };
};

export default QuestionList;
