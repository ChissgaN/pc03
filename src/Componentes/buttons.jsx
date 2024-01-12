import React from 'react';

export function Buttons({ idLi, val, text, onClick, isActive }) {
  return (
    <li id={idLi}>
      <button
        type="button"
        className={`percentage-button ${isActive ? 'active' : ''}`}
        value={val}
        onClick={() => onClick(val)}
      >
        {text}
      </button>
    </li>
  );
}

