import React from 'react';

export function Result({ name, per, sig, num, nameTwo, totalAmount }) {
  return (
    <>
      <div className="text-amount">
        <div>
          <h2>{name}</h2>
          <p>{per}</p>
        </div>
        <h3>
          {sig}<span id="tip-amount">{num}</span>
        </h3>
      </div>
      <div className="total-amount">
        <div>
          <h2>{nameTwo}</h2>
          <p>{per}</p>
        </div>
        <h3>
          {sig}<span id="total">{totalAmount}</span>
        </h3>
      </div>
    </>
  );
}
