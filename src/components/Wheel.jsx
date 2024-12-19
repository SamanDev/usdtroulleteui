import React, { useState } from 'react';
import './App.css';

import { Wheel } from 'react-custom-roulette';

const data = [
    { option: '0REACT' },
    { option: '1CUSTOM' },
    { option: '2ROULETTE', style: { textColor: '#f9dd50' } },
    { option: '3WHEEL' },
    { option: '4REACT' },
    { option: '5CUSTOM' },
    { option: '6ROULETTE', style: { textColor: '#70bbe0' } },
    { option: '7WHEEL' },
  ];

const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 8;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 20;
const fontStyle = 'normal';
const textDistance = 60;
var spinDuration = 0.5;

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin ) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      spinDuration = 0.5;
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }else{
        spinDuration = 0;
        setMustSpin(false);
    }
  };
  console.log(mustSpin, prizeNumber);

  return (
    <div className="App">
      <header className="App-header">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          startingOptionIndex={prizeNumber}
          textDistance={textDistance}
          
        />
        <button className={'spin-button'} onClick={handleSpinClick}>
          SPIN
        </button>
      </header>
    </div>
  );
};

export default App;
