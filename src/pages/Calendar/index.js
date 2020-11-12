import React from "react";
import HomeLayout from "../../layout";
import CalendarImage from "./img/calendrierMonth.svg";
import styles from "./Calendar.module.css";


const Calendar = () => {
  return (
    <div>
      <HomeLayout />
      <div className={styles.CalendarContainer}>
      <img className={styles.calendarImage} src={CalendarImage} alt="Calendrier, nous n'avons pas eu le temps de l'intégrer" />

    </div>    
    </div>
  );
};

export default Calendar;
