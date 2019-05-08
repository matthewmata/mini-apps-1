import React from 'react';

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h3>Billing</h3>
        <form onSubmit={this.props.handleBillingSubmit}>
          <label>
            Credit Card Number:
            <input required type="number" name="creditCardNum" onChange={this.props.handleChange}></input>
          </label>
          <label>
            Expiry Date:
            <input required type="text" name="expiryDate" onChange={this.props.handleChange}></input>
          </label>
          <label>
            CVV:
            <input required type="number" name="CVV" onChange={this.props.handleChange}></input>
          </label>
          <label>
            Billing Zip Code:
            <input required type="number" name="billingZipCode" onChange={this.props.handleChange}></input>
          </label>
          <button onClick={() => this.props.switchPage(1)}>Go Back</button>
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

export default Billing;