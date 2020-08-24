import React from 'react';

const Menu = ({getQuestions,changeDifficulty}) => {
  return(
    <div className="menu__section">
      <div className="grid-container" data-toggle="buttons">
        <div className="text-light menu__label">Choose Difficulty</div>
        <div className="btn-group">
          <button className="btn btn-outline-light btn-lg" onClick={changeDifficulty} value={null}>All</button>
          <button className="btn btn-outline-light btn-lg" onClick={changeDifficulty} value='easy'>Easy</button>
          <button className="btn btn-outline-light btn-lg " onClick={changeDifficulty} value='medium'>Medium</button>
          <button className="btn btn-outline-light btn-lg" onClick={changeDifficulty} value='hard'>Hard</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
