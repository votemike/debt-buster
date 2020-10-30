import React from 'react';
import styles from "../styles/AddDebtForm.module.css";

class AddDebtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialFormState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialFormState() {
    return {name: '', amount: '', apr: '', minimumMonthlyRepayment: 10}; // servicing, 0% balance transfer, minimum monthly payment %
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addDebtHandler(this.state);
    this.setState(this.getInitialFormState());
  }

  render() {
    return (
      <React.Fragment>
        <h2>Add a Debt</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formRow}>
            <label>Debt/Loan/Card Name</label>

            <input name="name" value={this.state.name} onChange={this.handleInputChange}
                   placeholder="Car Loan" required/>
          </div>
          <div className={styles.formRow}>
            <label>Debt amount</label>
            <input name="amount" value={this.state.amount} onChange={this.handleInputChange}
                   type="number" placeholder="871" step="any" min="0" required/>
          </div>
          <div className={styles.formRow}>
            <label>APR</label>
            <input name="apr" value={this.state.apr} onChange={this.handleInputChange}
                   type="number" placeholder="29.9" step="any" min="0" required/>
          </div>
          <div className={styles.formRow}>
            <label>Min Monthly Repayment (£)</label>
            <input name="minimumMonthlyRepayment" value={this.state.minimumMonthlyRepayment} onChange={this.handleInputChange}
                   type="number" placeholder="10" step="any" min="0" required/>
          </div>
          <div className={styles.formRow}>
            <button type="submit" className="button is-primary">
              Add Debt
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddDebtForm
