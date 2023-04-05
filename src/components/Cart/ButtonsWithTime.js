import React, { useState } from 'react';
import './ButtonsWithTime.css'

const ButtonsWithTime = () => {
  const [time, setTime] = useState('');

  const handleButtonClick = (event) => {
    const buttonTime = event.target.value;
    setTime(buttonTime);
  };

  return (
    <div>
      <button className='button-style' value="10:00" onClick={handleButtonClick}>10:00</button>
      <button className='button-style' value="11:00" onClick={handleButtonClick}>11:00</button>
      <button className='button-style' value="12:00" onClick={handleButtonClick}>12:00</button>
      <button className='button-style' value="13:00" onClick={handleButtonClick}>13:00</button>
      <p>{time}</p>
    </div>
  );
};

export default ButtonsWithTime;
