/*new moon*/
import React from "react";
import PagerButton from "../Buttons/PagerButton/PagerButton";
import DayItem from "../DayItem/DayItem";
import "./DaysArea.css";
import leftImg from "../../assets/img/left.png";
import rightImg from "../../assets/img/right.png";
import { useState, useEffect } from "react";
import { dayServices } from "../../services/dayServices";
const DaysArea = ({days, onDayClick, onMoodClick}) => {
  /*const days = [
    { mood: "green", date: "10/10/10", mood: "green" },
    { mood: "green", date: "10/10/10", mood: "green" },
    { mood: "yellow", date: "10/10/10", mood: "yellow" },
    { mood: "green", date: "10/10/10", mood: "green" },
    { mood: "orange", date: "10/10/10", mood: "orange" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
    { mood: "red", date: "10/10/10", mood: "red" },
  ];
*/


const leftImage = <img src={leftImg}></img>;
const rightImage = <img src={rightImg}></img>;



  return (
    <div className="days">
      <div className="days__collection">
        {days.map((day, index) => (
          <DayItem day={day} key={day._id} id={day._id} onDayClick={onDayClick}/>
        ))}
      </div>
      <div className="days__buttons">
        <PagerButton
          img={leftImage}
          className="days__button days__button--left"
        ></PagerButton>
        <PagerButton
          img={rightImage}
          className="days__button days__button--right"
        ></PagerButton>
      </div>
    </div>
  );
};

export default DaysArea;
