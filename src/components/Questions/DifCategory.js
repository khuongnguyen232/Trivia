import React from 'react';

const DifCategory = ({className, changeSubject}) => {

  return (
    <select className ={className} onChange = {changeSubject}>
      <option value='null'>All</option>
      <option value='easy'>Easy</option>
      <option value='medium'>Medium</option>
      <option value='hard'>Hard</option>
    </select>
  );
};

export default DifCategory;
