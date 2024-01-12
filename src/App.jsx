import React, { useState } from "react";
import "./App.css";
import Info from "./Componentes/icon";
import ButtonsBox from "./Componentes/buttonsBox";
import InputsBox, { InputsBoxTwo } from "./Componentes/inputsBox";
import ResultBox from "./Componentes/resultBox";

function App() {
  const [reset, setReset] = useState(false);
  const [billValue, setBillValue] = useState('0');
  const [peopleValue, setPeopleValue] = useState('1');
  const [selectedTip, setSelectedTip] = useState(null);

  const handleReset = () => {
    setReset(true);
    setBillValue('0');
    setPeopleValue('1');
    setSelectedTip(null);
    setTimeout(() => {
      setReset(false);
    }, 0);
  };

  const handleButtonClick = (value) => {
    setSelectedTip(value);
  };

  return (
    <>
      <Info />
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1>
          <InputsBox reset={reset} setBillValue={setBillValue} setPeopleValue={setPeopleValue} />
          <h2>Select Tip %</h2>
          <ButtonsBox reset={reset} onButtonClick={handleButtonClick} />
          <h2>Number of People</h2>
          <InputsBoxTwo reset={reset} setPeopleValue={setPeopleValue} />
        </div>
        <div className="result-wrapper">
          <ResultBox
            billValue={billValue}
            peopleValue={peopleValue}
            selectedTip={selectedTip}
            setBillValue={setBillValue}
            setPeopleValue={setPeopleValue}
            setSelectedTip={setSelectedTip}
          />
          <button type="button" id="reset-button" className="reset-button" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
