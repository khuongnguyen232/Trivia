import React from 'react';
import category from './category.js';


const CategoryList = ({className, changeSubject}) => {

  const displayCategory = category.map ((subject, index) => {
    return <option key={index} value={index + 8}>{subject}</option>
  });

  return (
    <select className ={className} onChange = {changeSubject}>
      {displayCategory}
    </select>
  );
};

export default CategoryList;
