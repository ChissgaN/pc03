import React from 'react';
import { Result } from './result';

export default function ResultBox({ billValue, peopleValue, selectedTip }) {
  const calculateTipAmount = () => {
    if (billValue && peopleValue && selectedTip !== null) {
      const tipPercentage = selectedTip / 100;
      const tipAmountPerPerson = (billValue * tipPercentage) / peopleValue;


      return tipAmountPerPerson.toFixed(2);
    }
    return '0.00';
  };

  const calculateTotalAmount = () => {
    if (billValue && peopleValue && selectedTip !== null) {
      const tipAmountPerPerson = parseFloat(calculateTipAmount());
      const totalAmount = (parseFloat(billValue) / parseFloat(peopleValue)) + tipAmountPerPerson;


      return totalAmount.toFixed(2);
    }
    return '0.00';
  };

  return (
    <>
      <div className="result-txt">
        <Result
          name={'Tip Amount'}
          per={'/ person'}
          sig={'$'}
          num={calculateTipAmount()}
          nameTwo={'Total'}
          totalAmount={calculateTotalAmount()}
        />
      </div>
    </>
  );
}
