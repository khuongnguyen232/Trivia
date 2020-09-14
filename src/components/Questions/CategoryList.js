import React from 'react';
import category from './category.js';


const CategoryList = ({changeSubject}) => {

  const displayCategory = category.map ((subject, index) => {
    return <option key={index} value={index + 8} onChange={changeSubject}>{subject}</option>
  });

  return (
    <select onChange = {changeSubject}>
      {displayCategory}
    </select>
  );
};

export default CategoryList;
