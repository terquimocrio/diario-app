import React from 'react';
import "../Button.css"
import img from "../../../assets/img/plus.png"

const AddButton = ({onAddNewDay}) => {
  return (
    <div className='day-text__button day-text__button--add' onClick={onAddNewDay}>
      <img src={img} alt="" />
    </div>
  );
}

export default AddButton;
