import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.a`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 4px 32px;
  margin: 4px;
  border-radius: 6px;
  ${(props) => getButtonBcolor(props)}
  &:active {
    border-bottom: none;
  }
`;

const getButtonBcolor = (props) => {
  if (props.type === 'primary') {
    return `
      color: white;
      background-color: rgb(66, 195, 96);
      border-bottom: 2px solid rgb(40, 167, 69);
      &:hover {
        background-color: rgb(40, 180, 69);
      }
  `;
  } else if (props.type === 'danger') {
    return `
    color: white;
      background-color: rgb(215, 58, 73);
      border-bottom: 2px solid rgb(175, 28, 42);
      &:hover {
        background-color: rgb(195, 28, 42);
      }
  `;
  }
};

function Button({ type, onChange, ButtonName }) {
  return (
    <DefaultButton type={type} onClick={onChange}>
      {ButtonName}
    </DefaultButton>
  );
}

export default Button;
