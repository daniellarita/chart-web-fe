import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueX: '',
        valueY: '',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      event.target.name === 'dataX' ? this.setState({valueX: event.target.value}) : this.setState({valueY: event.target.value});
    }
  
    handleSubmit(event) {
      alert(
`DataX was submitted: ${this.state.valueX}
DataY was submitted: ${this.state.valueY}`
        );
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <h2>User Input</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    DataX:
                    <input name="dataX" type="text" value={this.state.valueX} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    DataY:
                    <input name="dataY" type="text" value={this.state.valueY} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

export default UserInput;