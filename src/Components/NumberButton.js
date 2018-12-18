import React from 'react';
import styled from 'styled-components';


const NumberWrapper = styled.div`
div {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  padding: 20px 50px;
}



`

const NumberButton = ({ label, onClick, size, value, className }) => {
  return (
    <NumberWrapper className="buttons">
      <div
        onClick={onClick}
        data-size={size}
        data-value={value}
        className={className}
      >
        {label}
      </div>
    </NumberWrapper>
  );
}

export default NumberButton;