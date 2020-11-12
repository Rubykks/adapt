import React from "react";
import HomeLayout from "../../layout";
import styles from "./MyAccount.module.css";
import ReturnButton from "../../components/ReturnButton";
import AccountHeader from "../../components/MyAccountHeader";
import TextLink from "../../components/LinkText";
import SousTitre from "../../components/SousTitre";



const MyAccount = () => {
  return (
   
  <div>
        <ReturnButton/>
        <h1 className={styles.titreMyAccount}>Mon compte</h1>

      <HomeLayout />
    <div className={styles.myAccountContainer}>
      <AccountHeader/>
      </div>
  <div className={styles.textContainer}>
      <TextLink className={styles.link}
      name="A propos" 
      fontWeight= "700"
      fontSize="16px"
      />
     

<     TextLink className={styles.link}
      name="Connexion à d’autres applications" 
      fontWeight= "700"
      fontSize="16px"
      />

      <SousTitre className={styles.label}
      name="Connecte-toi à d’autres applis pour une expérience optimale." 
      fontWeight= "400"
      fontSize="12px"
      />

      <TextLink className={styles.link}
      name="Conditions Générale d’utilisation" 
      fontWeight= "700"
      fontSize="16px"
      />

      <SousTitre className={styles.label}
      name="Tout ce qu’il faut savoir." 
      fontWeight= "400"
      fontSize="12px"
      />

      <TextLink className={styles.link}
      name="Politique de confidentialité" 
      fontWeight= "700"
      fontSize="16px"
      />

      <SousTitre className={styles.label}
      name="Important autant pour toi que pour nous" 
      fontWeight= "400"
      fontSize="12px"
      />

      <TextLink className={styles.link}
      name="Assistance" 
      fontWeight= "700"
      fontSize="16px"
      />

      <SousTitre className={styles.label}
      name="Laisse notre équipe et nos utilisateurs t’aider" 
      fontWeight= "400"
      fontSize="12px"
      />

      <TextLink className={styles.link}
      name="Déconnexion" 
      fontWeight= "700"
      fontSize="16px"
      />

  </div>
    
  </div>
   
  );
};

export default MyAccount;
