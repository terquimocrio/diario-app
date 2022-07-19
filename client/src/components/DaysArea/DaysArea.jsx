/*new moon*/
import React from "react";
import PagerButton from "../Buttons/PagerButton/PagerButton";
import DayItem from "../DayItem/DayItem";
import "./DaysArea.css";
import leftImg from "../../assets/img/left.png";
import rightImg from "../../assets/img/right.png";

const DaysArea = ({days, onDayClick}) => {



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
