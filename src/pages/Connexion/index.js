import React from 'react'
import ButtonNext from '../../components/ButtonNext';
import InputString from '../../components/InputString';
import styles from "./Connexion.module.css";
const Connexion = () => {
  return (
    <div className={styles.containerConnexion}>
    <h2 className={styles.TitreConnexion}>Salut, on se connait ?</h2>
    
    <div className={styles.inputMail}>

      <InputString

      inputType= "email"
      placeHolderInput= "Adresse mail"
      color ="#2B2B2B" 
      backgroundColor="rgba(247, 247, 247, 0.50)" 
      fontWeight= '500'
      />

    </div>


    <div className={styles.inputMotDePasse}>
      <InputString
       inputType= "password"
       placeHolderInput= "Mot de passe"
       color ="#2B2B2B" 
       backgroundColor="rgba(247, 247, 247, 0.50)" 
       fontWeight= '500'
       
      />
      
    </div>
    <div className={styles.boutouSuivant}><ButtonNext 
      name ="Suivant" 
      color ="#F8F8F8" 
      backgroundColor="rgba(0, 0, 0, 0.85)" 
      fontWeight= '700'/>
      </div>

      <p className={styles.orText}>ou</p>
      
    </div>
  );
};

export default Connexion;