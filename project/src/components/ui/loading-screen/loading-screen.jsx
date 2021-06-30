import React from 'react';
import styles from './loading-screen.module.css';


function LoadingScreen() {
  return (
    <div className={styles.loader}>
      <div className={`${styles.inner} ${styles.one}`} />
      <div className={`${styles.inner} ${styles.two}`} />
      <div className={`${styles.inner} ${styles.three}`} />
      <span className={styles.text}>Loading</span>
    </div>
  );
}


export default LoadingScreen;
