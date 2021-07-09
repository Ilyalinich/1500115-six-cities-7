import React from 'react';
import styles from './reviews-loading-screen.module.css';


function ReviewsLoadingScreen() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Reviews loading </span>
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
  );
}


export default ReviewsLoadingScreen;
