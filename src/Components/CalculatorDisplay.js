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

.flex__parent {
  display: flex;

}

.num__flex {
  display: flex;
  flex-wrap: wrap;
  max-width:75%;
  display: flex;
    
    align-items: center;
  .clear{
    padding: 30px 170px!important;
  }
  .num {
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 30px 53px;
    font-size: 38px;
    font-weight:bold;
  }
}


.operator__flex {
  .num{ 
    display: flex;
    justify-content:center;
    align-items: center;
    background: darkred;
    color: white;
    width: 100%;
    max-width:75%;
    font-size: 38px;
    font-weight:bold;

  }
}

.num { 
  border: 1px solid red;
  padding: 30px 30px;
}
`

const CalculatorDisplay = ({ data, handleClick }) => {
  return (
    <CalculatorWrapper >
      <ActionButton data={data} />
      <div className="flex__parent">
        <div className="num__flex">
          <NumberButton onClick={handleClick} className="num clear" label="clear" value="clear" />
          <NumberButton onClick={handleClick} className="num" label="7" value="7" />
          <NumberButton onClick={handleClick} className="num" label="8" value="8" />
          <NumberButton onClick={handleClick} className="num" label="9" value="9" />
          <NumberButton onClick={handleClick} className="num" label="4" value="4" />
          <NumberButton onClick={handleClick} className="num" label="5" value="5" />
          <NumberButton onClick={handleClick} className="num" label="6" value="6" />
          <NumberButton onClick={handleClick} className="num" label="1" value="1" />
          <NumberButton onClick={handleClick} className="num" label="2" value="2" />
          <NumberButton onClick={handleClick} className="num" label="3" value="3" />
          <NumberButton onClick={handleClick} className="num clear" label="0" value="0" />
        </div>

        <div className="operator__flex">
          <NumberButton onClick={handleClick} className="num" label="/" value="/" />
          <NumberButton onClick={handleClick} className="num" label="x" value="*" />
          <NumberButton onClick={handleClick} className="num" label="-" value="-" />
          <NumberButton onClick={handleClick} className="num" label="+" size="2" value="+" />
          <NumberButton onClick={handleClick} className="num" label="=" size="2" value="equal" />
        </div>
      </div>
    </CalculatorWrapper >
  )
}

export default CalculatorDisplay;