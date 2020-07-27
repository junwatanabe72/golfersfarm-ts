import React from 'react';
import styled from 'styled-components';

type selectColor = "primary" | "secondary";

interface ButtonProps {
  color: selectColor,
  onClick: () => void,
} 
const DefaultButton = styled.a < { color: selectColor }>`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 4px 32px;
  margin: 4px;
  border-radius: 6px;
  ${(props) => getButtonBcolor(props.color)};
  &:active {
    border-bottom: none;
  }
`;

const getButtonBcolor = (props: selectColor) => {
  if (props === 'primary') {
    return `
      color: black;
      background-color: #00bcd4;
      border-bottom: 2px solid #008ba2;
      &:hover {
        background-color: #008ba2;
      }
  `;
  } else if (props === 'secondary') {
    return `
      color: white;
      background-color: #ff5722;
      border-bottom: 2px solid #c41c00;
      &:hover {
        background-color: #c41c00;
      }
  `;
}
};

const Button: React.FC<ButtonProps>=({color,onClick,children}) => {
  return (
    <DefaultButton color={color} onClick={onClick}>
      {children}
    </DefaultButton>
  );
}

export default Button;