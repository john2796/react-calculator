import React from 'react';
import styled from 'styled-components';



const NumberWrapper = styled.div`




`

const NumberButton = ({ text, onClick, size, value, className }) => {
  return (
    <NumberWrapper className="buttons">
      <div
        onClick={onClick}
        data-size={size}
        data-value={value}
        className={className}
      >
        {text}
      </div>
    </NumberWrapper>
  );
}

export default NumberButton;