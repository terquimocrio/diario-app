import React from "react";
import green from "../../../assets/img/greenL.png";
import yellow from "../../../assets/img/yellowL.png";
import orange from "../../../assets/img/orangeL.png";
import red from "../../../assets/img/redL.png";
import "./MoodButtons.css";

const MoodButtons = ({onMoodClick}) => {
  const handleClick = (event) => {
    onMoodClick(event.target.id);
  };

  return (
    <div className="modal__container__content__buttons">
      <div
        className="modal__container__content__buttons__button modal__container__content__buttons__button--green"
        id="green"
        onClick={handleClick}
      >
        <img
          src={green}
          alt=""
          className="modal__container__content__buttons__button__img"
          id="green"
        />
      </div>
      <div
        className="modal__container__content__buttons__button modal__container__content__buttons__button--yellow"
        id="yellow"
        onClick={handleClick}
      >
        <img
          src={yellow}
          alt=""
          className="modal__container__content__buttons__button__img"
          id="yellow"
        />
      </div>
      <div
        className="modal__container__content__buttons__button modal__container__content__buttons__button--orange"
        id="orange"
        onClick={handleClick}
      >
        <img
          src={orange}
          alt=""
          className="modal__container__content__buttons__button__img"
          id="orange"
        />
      </div>
      <div
        className="modal__container__content__buttons__button modal__container__content__buttons__button--red"
        id="red"
        onClick={handleClick}
      >
        <img
          src={red}
          alt=""
          className="modal__container__content__buttons__button__img"
          id="red"
        />
      </div>
    </div>
  );
};

export default MoodButtons;
