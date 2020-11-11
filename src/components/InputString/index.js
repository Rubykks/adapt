import React from "react";
import styles from './InputString.module.css';
import PropTypes from 'prop-types';



class InputString extends React.Component {
  
    render() {
      return (
        <div>coucou</div>
      );
    }
  }
 

  InputString.propTypes = {
    name: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string


  }
  export default InputString;