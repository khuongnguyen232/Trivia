import React from 'react';

const ScoreBoard = ({score}) => {
  return (
    <div className="score__section">
      <h1 className="score__title"> The score is: {score} / 10 </h1>
      <div className="score__description">Win if you can get at least 6 points</div>
    </div>
  );
};

export default ScoreBoard;
