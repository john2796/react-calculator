import React from 'react';
import NumberButton from './NumberButton';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`



`

const CalculatorDisplay = () => {
  return (
    <div>
      <div className="flex__parent">
        <NumberButton label="C" value="clear" />
        <NumberButton label="7" value="7" />
        <NumberButton label="4" value="4" />
        <NumberButton label="1" value="1" />
        <NumberButton label="0" value="0" />
      </div>
      <div className="flex__parent">
        <NumberButton label="/" value="/" />
        <NumberButton label="8" value="8" />
        <NumberButton label="5" value="5" />
        <NumberButton label="2" value="2" />
        <NumberButton label="." value="." />
      </div>
      <div className="flex__parent">
        <NumberButton label="x" value="*" />
        <NumberButton label="9" value="9" />
        <NumberButton label="6" value="6" />
        <NumberButton label="3" value="3" />
        <NumberButton label="" value="null" />
      </div>
      <div className="flex__parent">
        <NumberButton label="-" value="-" />
        <NumberButton label="+" size="2" value="+" />
        <NumberButton label="=" size="2" value="equal" />
      </div>
    </div>
  );
}

export default CalculatorDisplay;