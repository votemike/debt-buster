import React from 'react';
import styles from "../styles/DebtList.module.css";
import Debt from "./debt";

const DebtList = ({ debts }) => (
  <ul className={styles.list}>
    {debts.map((debt, index) => (
      <Debt key={debt.name} debt={debt}/>
    ))}
  </ul>
);

export default DebtList
