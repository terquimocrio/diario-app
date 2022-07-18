import React from "react";
import "./DayItem.css";
import green from "../../assets/img/green.png";
import yellow from "../../assets/img/yellow.png";
import orange from "../../assets/img/orange.png";
import red from "../../assets/img/red.png";

const DayItem = ({ day, selected, onDayClick, id }) => {
  const isSelected = selected ? "--selected" : "";
  const className = `days__item days__item--${day.mood}${isSelected}`;
  const img =
    day.mood === "green" ? (
      <img src={green} className="days__item__img"></img>
    ) : day.mood === "yellow" ? (
      <img src={yellow} className="days__item__img"></img>
    ) : day.mood === "orange" ? (
      <img src={orange} className="days__item__img"></img>
    ) : day.mood === "red" ? (
      <img src={red} className="days__item__img"></img>
    ) : (
      <img src=""></img>
    );

    const clickHandler = () => {
      onDayClick(id);
    }

  return (
    <div className={className} onClick={clickHandler} id={id}>
      <div className="days__item__content">
        {img}
        <div className="days__item__date">{day.formatDate}</div>
      </div>
    </div>
  ); 
};

export default DayItem;
