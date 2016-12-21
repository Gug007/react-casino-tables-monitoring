import React from 'react';

export default ({type}) => {
  switch(type) {
    case 'blackjack':
      return (
        <svg height="40" width="110" className="image">
          <g stroke="green" stroke-width="3">
            <path fill="#3D9970" d="M10,0C10,50 100,50 100,0"/>
          </g>
          <text text-anchor="middle" fill="white" x="20" y="20">{type}</text>
        </svg>
      );
    case 'poker':
      return (
        <svg height="40" width="110" className="image">
          <ellipse fill="#3D9970" cx="50" cy="20" rx="50" ry="20"/>
          <text text-anchor="middle" fill="white" x="30" y="25">{type}</text>
        </svg>
      );
    default:
      return null
  }
};