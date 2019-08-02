import React from 'react';
import calculateWinner from '../helpers/CalculateWinner';

const Square = ({value, onClick, highlightWinner}) => {
  const squareClass = highlightWinner ? 'square highlight' : 'square';
  return (
    <div className={squareClass} onClick={onClick}>
      {value}
    </div>
  )
};

export default Square;
