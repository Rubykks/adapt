import React from 'react'
import LogoAdapt from './img/Adapt_logo.svg'
import styles from './Logo.module.css'
const Logo = () => {

    return (
      <div className={styles.auth_container}>
        <div className={styles.logo_container}>
      <img className={styles.Logo} src={LogoAdapt} alt="Logo Adapt"/>
      </div>
      </div>
    );
  }
  
  export default Logo;
  