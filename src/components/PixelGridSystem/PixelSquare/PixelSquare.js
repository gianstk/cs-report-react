import React, { useState } from 'react';
import { IoCompassSharp } from 'react-icons/io5';

import './PixelSquare.css';

const PixelSquare = ({ enable, updateGrid, i, j, onSquareMouseDown, onSquareMouseMove, onSquareMouseUp }) => {
  const enableCSS = enable ? "enable" : "";
  
  const onMouseDown = (e) => {
    onSquareMouseDown(i, j, enable);
    e.stopPropagation();
    e.preventDefault();
  }

  const onMouseMove = (e) => {
    onSquareMouseMove(i, j);
    e.stopPropagation();
    e.preventDefault();
  }

  const onMouseUp = (e) => {
    onSquareMouseUp(i, j);
    e.stopPropagation();
    e.preventDefault();
  }

  // rendering
  return (
    <div 
      className={`PixelSquare ${enableCSS}`}
      
      onMouseDown={(e) => {onMouseDown(e)}}
      onMouseOver={(e) => {onMouseMove(e)}}
      onMouseUp={(e) => {onMouseUp(e)}}
    />
  );
}

export default PixelSquare;