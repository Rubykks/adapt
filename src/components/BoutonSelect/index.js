import React from "react";
import styles from './BoutonSelect.module.css';
import PropTypes from 'prop-types';



class ButtonSelect extends React.Component {

  render() {
    return (
      <button className={styles.buttonSelect} 
      >

      {this.props.name} 

      </button>
    );
  }
}


ButtonSelect.propTypes = {
    name: PropTypes.string,


  }
  export default ButtonSelect;
