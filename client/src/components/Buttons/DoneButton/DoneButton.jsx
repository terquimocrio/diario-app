import React from 'react';
import "../Button.css"
import img from "../../../assets/img/check.png"
const DoneButton = ({onSaveDayClickHandler}) => {

  const handleDoneClick = () => {  //calls the method that gets the day text
    onSaveDayClickHandler();
  }

  return (
    <div className='day-text__button' onClick={handleDoneClick}>
      <img src={img} alt="" />
    </div>
  );
}

export default DoneButton;
