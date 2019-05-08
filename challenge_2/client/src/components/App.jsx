import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      csv: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value}, () => console.log(this.state.query));
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api', {
      method: 'POST',
      body: this.state.query,
      headers: {"Content-Type": "application/json"}
    })
    .then(() => {
      fetch('/api', {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
      })
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
    document.getElementById('form').reset()
  }

  render() {
    return (
      <div>
        <h1>JSON to CSV</h1>
        <form id='form' onSubmit={this.handleSubmit}>
          <label>
            JSON:
            <input required type="file" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;

