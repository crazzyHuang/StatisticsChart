import React from 'react';
import styles from './header.css'
export default function(props) {
  return (
    <div>
      <div className={styles.header}>
        <span>{props.title}</span>
      </div>
      <div className={styles.timer}>
        <span>2019-06-17</span>
      </div>
    </div>
  );
}
