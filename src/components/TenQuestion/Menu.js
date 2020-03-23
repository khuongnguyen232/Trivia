import React from 'react';

const Menu = ({getQuestions,changeDifficulty}) => {
  return(
    <div className="menu__section">
      <button className="menu__load" onClick={getQuestions}>Load questions</button>

      <div className="menu">
        <label className="menu__label">Difficulty</label>
        <button className="menu__easy" onClick={changeDifficulty} value='easy'>Easy</button>
        <button className="menu__medium" onClick={changeDifficulty} value='medium'>Medium</button>
        <button className="menu__large" onClick={changeDifficulty} value='hard'>Hard</button>
      </div>
    </div>
  );
};

export default Menu;
