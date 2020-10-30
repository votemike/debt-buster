import Head from 'next/head'
import {useState} from 'react';
import styles from '../styles/Home.module.css'
import AddDebtForm from "../components/add-debt-form";
import DebtList from "../components/debt-list";

export default function Home() {
  const [navIsOpen, setNavOpen] = useState(false);
  const [debts, setDebts] = useState([]);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  function toggleNav() {
    setNavOpen(!navIsOpen);
  }

  const addDebtHandler = formState => {
    const debt = {
      name: formState.name,
      amount: parseFloat(formState.amount),
      apr: parseFloat(formState.apr),
      minimumMonthlyRepayment: parseFloat(formState.minimumMonthlyRepayment)
    };
    const sortedDebts = [...debts, debt].sort((a, b) => {
      const sort = b.apr - a.apr;
      if (sort === 0) {
        return a.amount - b.amount;
      }

      return sort;
    });
    setDebts(augmentDebts(sortedDebts));
    setNavOpen(false);
  };

  const augmentDebts = debts => {
    //TODO need to take other debts in to account
    return debts.map((debt) => {
      const monthlyRate = debt.apr / 100 / 12;
      debt.payOffMonths = -Math.log(1 - (monthlyRate * debt.amount / debt.minimumMonthlyRepayment)) / Math.log(1 + monthlyRate);
      return debt;
    });
  };

  const monthlyRepaymentHandler = event => {
    setMonthlyRepayment(parseFloat(event.target.value));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Debt Buster</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <section className={styles.topBit}>
        <div className={styles.quickView}>
          {/*These things should all get smaller when you scroll*/}
          {/*This div should be sticky to the top*/}
          <div>
            <div>Your Debts (£{debts.reduce((a, b) => a + b.amount, 0)})</div>
            <div>Paid off by (Y)</div>
          </div>

          <button onClick={toggleNav}>{navIsOpen ? 'Close' : 'Add Debt'}</button>
          {/*<div>Total to be paid off (current + interest)</div>*/}

          {/*<div>Total:Cards £3,500Interest £967Monthly payment £255</div>*/}
        </div>
        {navIsOpen && <AddDebtForm addDebtHandler={addDebtHandler}/>}
      </section>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Debt Buster
        </h1>

        <p className={styles.description}>
          Use this app to enter all your current debt and work out the way to pay them off fastest.
        </p>

        <p>How much can you afford to pay towards your debts each month?</p>
        <p>Monthly Repayments: £<input type='number' step='any' min="0" value={monthlyRepayment}
                                       onChange={monthlyRepaymentHandler}/></p>

        {debts.length > 0 && (<DebtList debts={debts}/>)}
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
        <div>Loads of content</div>
      </main>

      <footer className={styles.footer}>
        <div>Money Advice Service:
          <a href="https://www.moneyadviceservice.org.uk/en/tools/debt-advice-locator" target="_blank"
             rel="noopener noreferrer">Debt Advice Locator</a>
          <a href="https://www.moneyadviceservice.org.uk/en/tools/budget-planner" target="_blank"
             rel="noopener noreferrer">Budget Planner</a>
          <a href="https://www.moneyadviceservice.org.uk/en/categories/debt-and-borrowing" target="_blank"
             rel="noopener noreferrer">Debt and Borrowing</a>
          <a href="https://www.moneyadviceservice.org.uk/en/categories/help-with-loans" target="_blank"
             rel="noopener noreferrer">Help with loans</a>
        </div>
        <div>Money Saving Expert:
          <a href="https://www.moneysavingexpert.com/loans/debt-help-plan/" target="_blank" rel="noopener noreferrer">Debt
            Help</a>
          <a href="https://www.moneysavingexpert.com/eligibility/credit-cards/search/?goal=CC_BALTRANSFERV2"
             target="_blank" rel="noopener noreferrer">Credit Card Eligibilty Calculator</a>
        </div>
      </footer>
    </div>
  )
}
