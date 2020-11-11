import React from "react";
import Logo from "../../components/Logo";
import WhiteButtonNext from "../../components/ButtonNext";
import styles from "./Authentification.module.css";

const Authentification = () => {
  return (
    <div className={styles.authContainer}>
    <div className={styles.logoContainer}>
      <Logo />
    </div>
    <h2 className={styles.TextAuth}>Organise ta musique avec Adapt</h2>
    <div className={styles.ConnexionButton}>
      <WhiteButtonNext name ="S'inscrire gratuitement" color ="rgba(247, 247, 247, 0.85)" backgroundColor="rgba(0, 0, 0, 0.85)"fontWeight= '700'/>
    </div>
    <div className={styles.ConnexionButton}>
      <WhiteButtonNext name ="Se connecter" color ="rgba(0, 0, 0, 0.85)" backgroundColor="rgba(247, 247, 247, 0.85)" fontWeight= '500'/>
    </div>
    </div>
  );
};

export default Authentification;
