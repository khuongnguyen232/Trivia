import React from 'react';

const Menu = ({getQuestions,changeDifficulty}) => {
  return(
    <div className="menu__section">
      <button className="btn btn-outline-primary menu__load btn-lg" onClick={getQuestions}>Load questions</button>

      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <div className="text-light menu__label">Difficulty</div>
        <button className="btn btn-outline-light btn-lg" onClick={changeDifficulty} value={null}>All</button>
        <button className="btn btn-outline-light btn-lg" onClick={changeDifficulty} value='easy'>Easy</button>
        <button className="btn btn-outline-light btn-lg " onClick={changeDifficulty} value='medium'>Medium</button>
        <button className="btn btn-outline-light btn-lg" onClick={changeDifficulty} value='hard'>Hard</button>
      </div>
    </div>
  );
};

export default Menu;
