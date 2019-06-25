import React from 'react';
import styles from './horn.css';
export default function() {
  return (
    <div className={styles.horn}>
      <div className={styles.lt} />
      <div className={styles.rt} />
      <div className={styles.rb} />
      <div className={styles.lb}/>
    </div>
  );
}
