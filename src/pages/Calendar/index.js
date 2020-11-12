import React from "react";
import HomeLayout from "../../layout";
import CalendarImage from "./img/calendrierMonth.svg";
import styles from "./Calendar.module.css";
import ReturnButton from "../../components/ReturnButton";


const Calendar = () => {
  return (
    <div>
      <div>
        <ReturnButton/>
        <h1 className={styles.titrePlanning}>Mon planning</h1>

      
      <HomeLayout />
      <div className={styles.CalendarContainer}>
      <img className={styles.calendarImage} src={CalendarImage} alt="Calendrier, nous n'avons pas eu le temps de l'intégrer" />

    </div>    
    </div>
    </div>
  );
};

export default Calendar;
