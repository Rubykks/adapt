import React from 'react'
import ReturnButton from '../../components/ReturnButton';
import styles from './Ambiance.module.css'



const AmbiancePage = () => {

    return (
     <div className={styles.ambiancePageContainer}>
       <ReturnButton/>
     
      <div className={styles.triggerPlaylist}>

      </div >
     </div>

    );
  }
  
  export default AmbiancePage;
  