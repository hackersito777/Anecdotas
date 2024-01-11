import React from 'react';
import styles from "./Anecdota.module.css"

const Anecdota = ({ titulo, cuerpo }) => {
  return (
    <div className={styles.eldiv}>
      <h2 className={styles.elh2}>{titulo}</h2>
      <p className={styles.elp}>{cuerpo}</p>
    </div>
  );
};

export default Anecdota;
