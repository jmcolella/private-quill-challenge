import React from 'react';
import './StageThree.css';

const CompareItem = ( { id, data } ) => {
  return (
    <div>
      <div className="form-items">
        <label>{ data.initial }</label>
      </div>
      <div className="form-items">
        <label>{ data.change }</label>
      </div>
      <div className="form-items">
        <select name={ id }>
          <option value="articles">Articles</option>
          <option value="commas">Commas</option>
          <option value="proper-nouns">Proper Nouns</option>
        </select>
      </div>
    </div>
  )
};

export default CompareItem;