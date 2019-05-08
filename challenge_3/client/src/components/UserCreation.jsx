import React from 'react';

class UserCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h3>User Creation</h3>
        <form onSubmit={this.props.handleUserCreationSubmit}>
          <label>
            Name:
            <input required type="text" name="name" onChange={this.props.handleChange}></input>
          </label>
          <label>
            Email:
            <input required type="email" name="email" onChange={this.props.handleChange}></input>
          </label>
          <label>
            Password:
            <input required type="text" name="password" onChange={this.props.handleChange}></input>
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    )
  }
}

export default UserCreation;