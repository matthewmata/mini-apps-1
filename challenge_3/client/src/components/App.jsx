import React from 'react';
import axios from 'axios';
import UserCreation from './UserCreation'
import Shipping from './Shipping';
import Billing from './Billing';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: 0,
      creditCardNum: 0, 
      expiryDate: '', 
      CVV: 0,
      billingZipCode: 0
    }
    this.switchPage = this.switchPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUserCreationSubmit = this.handleUserCreationSubmit.bind(this);
    this.handleShippingSubmit = this.handleShippingSubmit.bind(this);
    this.handleBillingSubmit = this.handleBillingSubmit.bind(this);
  }

  switchPage(num) {
    this.setState({page: num})
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleUserCreationSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state 
    axios.get(`/api/checkout/${email}`)
      .then((data) => {
        if (!data.data) {
          axios.post('/api/checkout', { name, email, password })
          .then(() => this.switchPage(1))
          .catch(err => console.log(err));
        } else {
          alert('Email already in use. Try again')
        }
      })
      .catch(err => console.log(err));
  }

  handleShippingSubmit(event) {
    event.preventDefault();
    const { name, email, password, addressLine1, addressLine2, city, state, zipCode } = this.state 
    axios.put(`/api/checkout/${email}`, { name, password, addressLine1, addressLine2, city, state, zipCode })
      .then(() => this.switchPage(2))
      .catch(err => console.log(err));
  }

  handleBillingSubmit(event) {
    event.preventDefault();
    const { name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode } = this.state 
    axios.put(`/api/checkout/${email}`, { name, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode })
      .then(() => this.switchPage(3))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <div>
          {this.state.page === 0 ? (
            <UserCreation handleChange={this.handleChange} handleUserCreationSubmit={this.handleUserCreationSubmit}/>
          ) : this.state.page === 1 ? (
            <Shipping handleChange={this.handleChange} handleShippingSubmit={this.handleShippingSubmit} switchPage={this.switchPage}/>
          ) : this.state.page === 2 ? (
            <Billing handleChange={this.handleChange} handleBillingSubmit={this.handleBillingSubmit} switchPage={this.switchPage}/>
          ) : (
            <div>
              <h3>Review Your Info</h3>
              <div>
                <h5>User Info</h5>
                <button onClick={() => this.switchPage(0)}>Edit</button>
                <div>{this.state.name}</div>
                <div>{this.state.email}</div>
                <div>{this.state.password}</div>
              </div>
              <div>
                <h5>Shipping Info</h5>
                <button onClick={() => this.switchPage(1)}>Edit</button>
                <div>{this.state.addressLine1}</div>
                <div>{this.state.addressLine2}</div>
                <div>{this.state.city}</div>
                <div>{this.state.state}</div>
                <div>{this.state.zipCode}</div>
              </div>
              <div>
                <h5>Billing Info</h5>
                <button onClick={() => this.switchPage(2)}>Edit</button>
                <div>{this.state.creditCardNum}</div>
                <div>{this.state.expiryDate}</div>
                <div>{this.state.CVV}</div>
                <div>{this.state.billingZipCode}</div>
              </div>
              <button onClick={() => this.switchPage(0)}>Purchase</button>
            </div>
          )}
        </div>
        
      </div>
    )
  }
}

export default App;