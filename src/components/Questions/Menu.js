import React from 'react';
import CategoryList from './CategoryList';
import DifCategory from './DifCategory';

const Menu = ({getQuestions,changeDifficulty,changeSubject}) => {
  return(
    <div className="menu__section">
      <div className="grid-container">
        <div className="text-light menu__label">Choose Difficulty</div>
        <DifCategory className= "btn btn-outline-light btn-lg menu--difcategory" changeSubject={changeSubject} />
        <CategoryList className= "btn btn-outline-light btn-lg menu--category" changeSubject={changeSubject}/>
        <button className="btn btn-outline-light btn-lg menu--reset" onClick={getQuestions}>Load Question </button>
      </div>
    </div>
  );
};

export default Menu;
