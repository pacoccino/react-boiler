import React, { Component } from 'react';

import styles from './style.scss';

class WelcomeScreen extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Boilet</span>
          <span className={styles.alpha}>Plate</span>
        </div>
        <span className={styles.subtitle}>React/Redux Boilerplate</span>
        <div>
          <p className={styles.bottomText}>Hello world !</p>
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;
