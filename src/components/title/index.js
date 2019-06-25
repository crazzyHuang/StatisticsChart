import React from 'react';
import styles from './title.css';

export default function({title}) {
  return (
    <div className={styles.title}>
      <span>{title}</span>
    </div>
  );
}
