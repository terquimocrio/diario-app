import { useState, useEffect } from "react";
import DaymoodModal from "./components/DayMoodModal/DayMoodModal";
import DaysArea from "./components/DaysArea/DaysArea";
import DayText from "./components/DayText/DayText";
import Logo from "./components/Logo/Logo";
import "./index.css";
import { dayServices } from "./services/dayServices";



function App() {
  const [days, setDays] = useState([]);
  const [newDayModal, setNewDayModal] = useState(false);
  const [currentDay, setCurrentDay] = useState({
    _id: "",
    formatDate: "",
    text: "",
    mood: "",
  });
  const [refreshDays, setRefreshDays] = useState(false);
  const [daySelected, setDaySelected] = useState({
    _id: "",
    formatDate: "",
    text: "",
    mood: "",
  });

  useEffect(() => {
    getAllDays();
  }, []);

  useEffect(() => {
    getAllDays();
  }, [refreshDays]);

  useEffect(() => {
    console.log("check here : ", daySelected);
    setCurrentDay({
      _id: daySelected._id,
      formatDate: daySelected.formatDate,
      text: daySelected.text,
      mood: daySelected.mood,
    });
  }, [daySelected]);

  const dayModalOnClose = () => {
    setNewDayModal(!newDayModal);
  };

  const onAddNewDay = () => {
    setNewDayModal(true);
  };

  const onDayClick = (id) => {
    const dayClicked = days.filter((el) => el._id === id);
    console.log("Efefeffefe: ", dayClicked);
    setDaySelected(dayClicked[0]);
  };

  const onMoodClick = (mood) => {
    setCurrentDay({
      _id: "",
      formatDate: "",
      text: "",
      mood: mood,
    });
    setNewDayModal(!newDayModal);
  };

  const onSaveDayClick = () => {
    //save the day in db
    dayServices
      .create(currentDay.text, currentDay.mood)
      .then((res) => {
        setCurrentDay({
          _id: res._id,
          formatDate: res.formatDate,
          text: res.text,
          mood: res.mood,
        });
        setRefreshDays(!refreshDays);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dayTextChangeHandler = (text) => {
    setCurrentDay({
      _id: currentDay._id,
      formatDate: currentDay.formatDate,
      text: text,
      mood: currentDay.mood,
    });
  };

  const getAllDays = () => {
    dayServices.getAll().then((res) => {
      setDays(res);
    });
  };

  const onDeleteClick = () => {
    
    if (currentDay._id !== "") {
      var x = window.confirm("You are about to delete de selected day")
      console.log("x", x)
      if(!x) return;
      dayServices.deleteById(currentDay._id).then((res) => {
        alert("Day deleted");
        setDaySelected({
          _id: "",
          formatDate: "",
          text: "",
          mood: "",
        })
        setRefreshDays(!refreshDays);
      });
    } else {
      alert("Select one day");
    }
  };

  return (
    <div className="app-container">
      <Logo></Logo>
      <div className="app-container__days">
        <DaysArea days={days} onDayClick={onDayClick}></DaysArea>
      </div>
      <DayText
        onAddNewDay={onAddNewDay}
        onSaveDayClick={onSaveDayClick}
        onDeleteClick={onDeleteClick}
        dayTextChangeHandler={dayTextChangeHandler}
        text={currentDay.text}
        title={currentDay.formatDate}
      ></DayText>
      {newDayModal ? (
        <DaymoodModal
          onClickClose={dayModalOnClose}
          onMoodClick={onMoodClick}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
