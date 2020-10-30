import React from 'react';
import styles from "../styles/Debt.module.css";

const Debt = ({debt}) => (
  <li className={styles.card}>
    <h3>{debt.name}</h3>
    <p>£{debt.amount} - {debt.apr}% - {debt.payOffMonths.toFixed(1)} months</p>
  </li>
);

export default Debt
