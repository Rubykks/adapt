import React from "react";
import ButtonSelect from "../../components/BoutonSelect";
import ButtonNext from "../../components/ButtonNext";

import styles from "./Questionnaire.module.css";

import { Link } from "react-router-dom";



const Questionnaire = () => {
  return (
    <div className={styles.containerQuestionnaire}>
      <div className={styles.HeaderText}>
      <h2 className={styles.TitreQuestionnaire}>Apprenons à nous connaître !</h2>
      <p className={styles.SousTitre}>On est très sympatique</p>

      </div>

      <h2 className={styles.Question1}>Lorsque je travaille je préfère la musique...</h2>

    <div className={styles.ButtonContainer}>
        <ButtonSelect
          name="Et seulement la musique"
        />

        <ButtonSelect
          name="Avec parole"
        />
    </div>

    <div className={styles.boutouSuivant}>
        <Link to="/home">
          <ButtonNext
            name="Suivant"
            color="#F8F8F8"
            backgroundColor="rgba(0, 0, 0, 0.85)"
            fontWeight="700"
          />
        </Link>
      </div>








    </div>
  );
};

export default Questionnaire;