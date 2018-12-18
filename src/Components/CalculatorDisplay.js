import React from 'react';
import NumberButton from './NumberButton';
import styled from 'styled-components';
import ActionButton from './ActionButton';

const CalculatorWrapper = styled.div`
max-width: 505px;
cursor: pointer;
.clear {
  color: red;
}
`

const CalculatorDisplay = ({ data, handleClick }) => {
  return (
    <CalculatorWrapper >
      <ActionButton data={data} />
      <div className="flex__parent">
        <NumberButton onClick={handleClick} className="clear" label="clear" value="clear" />
        <NumberButton onClick={handleClick} label="7" value="7" />
        <NumberButton onClick={handleClick} label="8" value="8" />
        <NumberButton onClick={handleClick} label="9" value="9" />
        <NumberButton onClick={handleClick} label="4" value="4" />
        <NumberButton onClick={handleClick} label="5" value="5" />
        <NumberButton onClick={handleClick} label="6" value="6" />
        <NumberButton onClick={handleClick} label="1" value="1" />
        <NumberButton onClick={handleClick} label="2" value="2" />
        <NumberButton onClick={handleClick} label="3" value="3" />
        <NumberButton onClick={handleClick} label="0" value="0" />
        <NumberButton onClick={handleClick} label="/" value="/" />
        <NumberButton onClick={handleClick} label="x" value="*" />
        <NumberButton onClick={handleClick} label="-" value="-" />
        <NumberButton onClick={handleClick} label="+" size="2" value="+" />
        <NumberButton onClick={handleClick} label="=" size="2" value="equal" />
      </div>
    </CalculatorWrapper >
  )
}

export default CalculatorDisplay;