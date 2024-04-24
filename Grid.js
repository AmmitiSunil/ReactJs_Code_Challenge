import React from 'react';
import './Grid.css'; // This will be used to style the grid and colored cells

function Grid({ coloredIndices }) {
  const cells = Array.from({ length: 9 }, (_, i) => {
    const colorClass = coloredIndices.includes(i + 1) ? 'colored' : '';
    return <div key={i} className={`cell ${colorClass}`}></div>;
  });

  return <div className="grid">{cells}</div>;
}

export default Grid;
