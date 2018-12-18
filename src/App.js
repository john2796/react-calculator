import React, { Component } from 'react';
import CalculatorDisplay from './Components/CalculatorDisplay';
import * as math from 'mathjs'
import update from 'react-addons-update'; 



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operations: []
    }
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'clear':
        this.setState({ operations: [] });
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({ operations: newOperations });
        break
    }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    console.log(result);
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }



  render() {

    const { operations } = this.state;
    return (
      <div className="App">
        <CalculatorDisplay handleClick={this.handleClick} data={operations} />
      </div>
    );
  }
}

export default App;
