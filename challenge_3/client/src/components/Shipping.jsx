import React from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h3>Shipping</h3>
        <form onSubmit={this.props.handleShippingSubmit}>
          <label>
            AddressLine1:
            <input required type="text" name="addressLine1" onChange={this.props.handleChange}></input>
          </label>
          <label>
            AddressLine2:
            <input type="text" name="addressLine2" onChange={this.props.handleChange}></input>
          </label>
          <label>
            City:
            <input required type="text" name="city" onChange={this.props.handleChange}></input>
          </label>
          <label>
            State:
            <input required type="text" name="state" onChange={this.props.handleChange}></input>
          </label>
          <label>
            zipCode:
            <input required type="number" name="zipCode" onChange={this.handleChange}></input>
          </label>
          <button onClick={() => this.props.switchPage(0)}>Go Back</button>
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

export default Shipping;