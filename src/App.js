import React, { Component } from 'react';
import CalculatorDisplay from './Components/CalculatorDisplay';


class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="App">
        <CalculatorDisplay handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
