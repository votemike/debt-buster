import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debt Buster</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <div className={styles.quickView}>
        {/*These things should all get smaller when you scroll*/}
        {/*This div should be sticky to the top*/}
        <div>Your Debts (X)</div>
        <button>Add Debt</button>
        <div>Total to be paid off (current + interest)</div>
        <div>Date it will be paid off by</div>
        <div>Total:Cards £3,500Interest £967Monthly payment £255</div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Debt Buster
        </h1>

        <p className={styles.description}>
          Use this app to enter all your current debt and work out the way to pay them off fastest.
        </p>


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
