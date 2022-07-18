import React from 'react';
import "../Button.css"
import img from "../../../assets/img/x.png"
const DeleteButton = ({onDeleteClick}) => {

 

  return (
    <div className='day-text__button' onClick={onDeleteClick}>
      <img src={img} alt="" />
    </div>
  );
}

export default DeleteButton;
