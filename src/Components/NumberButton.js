import React from 'react';
import styled from 'styled-components';


const NumberWrapper = styled.div`




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