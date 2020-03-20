import React from 'react';

const ScoreBoard = ({score}) => {
  return (
    <div className="score__section">
      <h1 className="score__title"> The current score is: {score} </h1>
    </div>
  );
};

export default ScoreBoard;
