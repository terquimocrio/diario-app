import React from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import DoneButton from "../Buttons/DoneButton/DoneButton";
import "./DayText.css";
const DayText = ({
  title,
  text,
  onAddNewDay,
  onSaveDayClick,
  onDeleteClick,
  dayTextChangeHandler,
}) => {
  const onSaveDayClickHandler = () => {
    //gets the day text
    onSaveDayClick();
  };

  const onChangeHandler = (event) => {
    dayTextChangeHandler(event.target.value);
  };

  return (
    <div className="day-text">
      <div className="day-text__container">
        <div className="day-text__title">{title}</div>
        <textarea
          className="day-text__text-area"
          onChange={onChangeHandler}
          value={text}
        ></textarea>
        <div className="day-text__buttons">
          <AddButton
            className="day-text__button day-text__button--add"
            onAddNewDay={onAddNewDay}
          ></AddButton>
          <DeleteButton className="day-text__button day-text__button--delete" onDeleteClick={onDeleteClick}></DeleteButton>
          <DoneButton
            className="day-text__button day-text__button--done"
            onSaveDayClickHandler={onSaveDayClickHandler}
          ></DoneButton>
        </div>
      </div>
    </div>
  );
};

export default DayText;
