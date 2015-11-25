"use strict";

import React, { Component } from 'react';
import Navigation     from './navigation';
import Footer         from './footer';
import styles         from '../CSS-modules/main.css'

export default class Index extends Component {
  render(){
    return (
      <div>
        <h2>Testing out react-router with webpack and css-modules</h2>
        <Navigation />
        <div className={styles.content}>
        {this.props.children}
        </div>
        <Footer />

      </div>
    );
  }

}