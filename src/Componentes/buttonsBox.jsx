import React, { useState } from 'react';
import { Buttons } from './buttons';

export default function ButtonsBox({ reset, onButtonClick }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [customValue, setCustomValue] = useState('');

  const buttonClick = (value) => {
    if (!customValue) {
      setSelectedButton(value);
      onButtonClick(value);
    }
  };

  const customInputChange = (e) => {
    const value = e.target.value;
    setCustomValue(value);
    setSelectedButton(null);
    onButtonClick(value);
  };

  React.useEffect(() => {
    if (reset) {
      setSelectedButton(null);
      setCustomValue('');
      onButtonClick(null);
    }
  }, [reset]);

  return (
    <>
      <ul>
        <Buttons
          idLi={'percentage-5'}
          val={'5'}
          text={'5%'}
          onClick={() => buttonClick(5)}
          isActive={selectedButton === 5}
        />
        <Buttons
          idLi={'percentage-10'}
          val={'10'}
          text={'10%'}
          onClick={() => buttonClick(10)}
          isActive={selectedButton === 10}
        />
        <Buttons
          idLi={'percentage-15'}
          val={'15'}
          text={'15%'}
          onClick={() => buttonClick(15)}
          isActive={selectedButton === 15}
        />
        <Buttons
          idLi={'percentage-25'}
          val={'25'}
          text={'25%'}
          onClick={() => buttonClick(25)}
          isActive={selectedButton === 25}
        />
        <Buttons
          idLi={'percentage-50'}
          val={'50'}
          text={'50%'}
          onClick={() => buttonClick(50)}
          isActive={selectedButton === 50}
        />
        <li>
          <input
            type="number"
            placeholder="Custom"
            id="custom-percentage-button"
            className="percentage-button"
            value={customValue}
            onChange={customInputChange}
          />
        </li>
      </ul>
    </>
  );
}
