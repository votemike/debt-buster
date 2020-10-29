import Head from 'next/head'
import {useState} from 'react';
import styles from '../styles/Home.module.css'
import AddDebtForm from "../components/add-debt-form";

export default function Home() {
  const [navIsOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navIsOpen);
  }

  const [debts, setDebts] = useState([]);

  const addDebtHandler = formState => {
    const debt = {name: formState.name, amount: parseFloat(formState.amount), apr: parseFloat(formState.apr)};
    setDebts([...debts, debt]);
    setNavOpen(false);
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

        {debts.length > 0 && (<ul>
          {debts.map((debt, index) => (
            <li key={debt.name}>{debt.name} - £{debt.amount} - {debt.apr}%</li>
          ))}
        </ul>)}
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
        <a href="https://www.moneyadviceservice.org.uk/en/tools/debt-advice-locator" target="_blank" rel="noopener noreferrer">Debt Advice Locator</a>
        <a href="https://www.moneyadviceservice.org.uk/en/tools/budget-planner" target="_blank" rel="noopener noreferrer">Budget Planner</a>
        <a href="https://www.moneyadviceservice.org.uk/en/categories/debt-and-borrowing" target="_blank" rel="noopener noreferrer">Debt and Borrowing</a>
        <a href="https://www.moneyadviceservice.org.uk/en/categories/help-with-loans" target="_blank" rel="noopener noreferrer">Help with loans</a>
        </div>
        <div>Money Saving Expert:
        <a href="https://www.moneysavingexpert.com/loans/debt-help-plan/" target="_blank" rel="noopener noreferrer">Debt Help</a>
        <a href="https://www.moneysavingexpert.com/eligibility/credit-cards/search/?goal=CC_BALTRANSFERV2" target="_blank" rel="noopener noreferrer">Credit Card Eligibilty Calculator</a>
        </div>
        </footer>
        </div>
        )
        }
