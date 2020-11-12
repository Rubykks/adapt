import React from "react";
import styles from './LinkText.module.css';
import PropTypes from 'prop-types';



class TextLink extends React.Component {
  
  render() {
    return (

      <h2 className={styles.text} 
      style={{
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        fontSize: this.props.fontSize}}
      >

      {this.props.name} 
      
      </h2>
      
    );
  }
}


TextLink.propTypes = {
    name: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string


  }
  export default TextLink;