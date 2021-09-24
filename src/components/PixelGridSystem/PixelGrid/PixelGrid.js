import React, { useEffect, useState } from 'react';

import './PixelGrid.css'

import PixelSquare from '../PixelSquare/PixelSquare';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

const PixelGrid = ({ x, y }) => {
  
  const [grid, setGrid] = useState(null);

  // mouse dragging
  const [dragging, setDragging] = useState(false);
  const [isWriting, setIsWriting] = useState(false);

  
  
  // initialise empty grid with (x, y) dimension
  const initGrid = () => {
    var newGrid = [];
    for (var i = 0; i < y; i++) {
      var r = [];
      for (var j = 0; j < x; j++) r[j] = false;
      newGrid.push(r);  
    }
    return newGrid;
  }

  const renderGrid = () => {
    if (!grid) return <div>No grid</div>
    
    return(
      <div>
        {
          grid.map((r, i) => {
            return <div className="flex" key={i}>
              {r.map((col, j) => {
                if (col == true) console.log("FOUND TRUE", col);
                return <PixelSquare 
                  enable={col} 
                  key={j} 
                  toggleGrid={toggleGrid} 
                  onSquareMouseDown={onSquareMouseDown}
                  onSquareMouseMove={onSquareMouseMove} 
                  onSquareMouseUp={onSquareMouseUp}
                  i={i} 
                  j={j}
                />
              })}
            </div>
          })
        }
      </div>
    );
  }
  
  const toggleGrid = (i, j) => {
    var cloneGrid = [...grid];
    cloneGrid[i][j] = !cloneGrid[i][j];
    setGrid(cloneGrid);
  }

  const updateGrid = (i, j, write) => {
    var cloneGrid = [...grid];
    cloneGrid[i][j] = write;
    setGrid(cloneGrid);
  }

  const onMouseDown = (e) => {
    console.log("on mouse down");
    setDragging(true);
    e.stopPropagation();
    e.preventDefault();
  }

  const onMouseMove = (e) => {
    if (!dragging) return;
    console.log("is dragging");
    e.stopPropagation();
    e.preventDefault();
  }

  const onMouseUp = (e) => {
    console.log("on mouse up");
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  }



  const onSquareMouseDown = (i, j, squareStatus) => {
    setDragging(true);
    setIsWriting(!squareStatus);
    toggleGrid(i, j)
  }

  const onSquareMouseMove = (i, j) => {
    if (!dragging) return;
    console.log(`mouse is moving through square (${i},${j})`);
    updateGrid(i, j, isWriting);
  }

  const onSquareMouseUp = (i, j) => {
    setDragging(false);
    setIsWriting(false);
  }



  useEffect(() => {
    setGrid(initGrid());
  }, []);

  return(
    <div 
      className="PixelGrid" 
      // onMouseDown={(e) => {onMouseDown(e)}} 
      // onMouseUp={(e) => {onMouseUp(e)}}
    >
      {renderGrid()}
    </div>
  );
}

export default PixelGrid;