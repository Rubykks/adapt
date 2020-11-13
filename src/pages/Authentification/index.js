import React from "react";
import AnimationLogo from "../../components/AnimationIntro";
import ButtonNext from "../../components/ButtonNext";
import styles from "./Authentification.module.css";

const Authentification = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.logoContainer}>
        <AnimationLogo/>
      </div>
      <h2 className={styles.TextAuth}>Organise ta musique avec Adapt</h2>
      <div className={styles.ConnexionButton}>
        <ButtonNext
          name="S'inscrire gratuitement"
          color="#F8F8F8"
          backgroundColor="rgba(0, 0, 0, 0.85)"
          fontWeight="700"
        />
      </div>
      <div className={styles.ConnexionButton}>
        <ButtonNext
          name="Se connecter"
          color="#2B2B2B"
          backgroundColor="rgba(247, 247, 247, 0.50)"
          f
          ontWeight="500"
        />
      </div>
    </div>
  );
};

export default Authentification;
