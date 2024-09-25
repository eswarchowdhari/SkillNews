import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    const spinnerStyle = {
      position: 'fixed',
      top: '0', 
      left: '0', 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
      zIndex: '1000' 
    };

    return (
      <div style={spinnerStyle}>
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}

export default Spinner;
