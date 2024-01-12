import React, { useState, useEffect } from 'react';
import { InBox } from './inputs';

export default function InputsBox({ reset, setBillValue }) {
  const [billValue, setBillValueLocal] = useState('0');

  useEffect(() => {
    if (reset) {
      setBillValueLocal('0');
      setBillValue('0');
    }
  }, [reset, setBillValue]);

  const billChange = (e) => {
    const value = e.target.value;
    setBillValueLocal(value);
    setBillValue(value);
  };

  return (
    <>
      <InBox
        idSpan={'intentob'}
        la={'input-bill'}
        classInput={'input-bill'}
        idInput={'input-bill'}
        type={'number'}
        val={billValue}
        min={'0'}
        onChange={billChange}
      />
    </>
  );
}

export function InputsBoxTwo({ reset, setPeopleValue }) {
  const [peopleValue, setPeopleValueLocal] = useState('1');

  useEffect(() => {
    if (reset) {
      setPeopleValueLocal('1');
      setPeopleValue('1'); 
    }
  }, [reset, setPeopleValue]);

  const peopleChange = (e) => {
    const value = e.target.value;
    setPeopleValueLocal(value);
    setPeopleValue(value); 
  };

  return (
    <>
      <InBox
        idSpan={'intento'}
        la={'input-people'}
        className={'input-people'}
        idInput={'input-people'}
        type={'number'}
        val={peopleValue}
        min={'1'}
        onChange={peopleChange}
      />
    </>
  );
}
