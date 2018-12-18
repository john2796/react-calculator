import React from 'react';
import styled from 'styled-components';


const ActionWrapper = styled.div`
background: gray;
padding: 20px 0;
width:100%;
display: flex;
max-width: 505px;
z-index: 9;
span {

width: 100%;
margin-right: 12px;
text-align: right;
color: white;
font-size: 80px;
font-weight: 300;
}
`

const ActionButton = ({ data }) => {
  const string = data.join('');
  return <ActionWrapper className="Display">
    <span>{string === "" ? 0 : string}</span>
  </ActionWrapper>
}

export default ActionButton;