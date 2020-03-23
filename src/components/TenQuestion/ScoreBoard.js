import React from 'react';

const ScoreBoard = ({score}) => {
  return (
    <div className="score__section">
      <h1 className="score__title"> The score is: {score} / 10 </h1>
      <p>Win if you can get at least 6 points</p>
    </div>
  );
};

export default ScoreBoard;
