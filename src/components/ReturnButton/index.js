import React from "react";
import styles from './ReturnButton.module.css'
import ArrowButton from './img/left-arrow.svg'

const ReturnButton = () => {
    return (
    <img className={styles.arrowButton} src={ArrowButton} alt="bouton retour"/>
    );
  };
  
  export default ReturnButton;
  