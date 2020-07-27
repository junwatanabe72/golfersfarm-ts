import React from 'react';
import styled from 'styled-components';
import { defaultColors, colorType } from "../../utils/constant/color"


interface ButtonProps {
  color: colorType,
  onClick: () => void,
} 
const DefaultButton = styled.a < { color: colorType }>`
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

const getButtonBcolor = (props: colorType) => {
  if (props === defaultColors.BASICCOLORS.primary) {
    return `
      color: ${defaultColors.BASICCOLORS.basic};
      background-color: ${defaultColors.BASICCOLORS.primary};
      border-bottom: 2px solid ${defaultColors.BASICCOLORS.primaryDark};
      &:hover {
        background-color: ${defaultColors.BASICCOLORS.primaryDark};
      }
  `;
  } else if (props === defaultColors.BASICCOLORS.secondary) {
    return `
      color: ${defaultColors.BASICCOLORS.white};
      background-color: ${defaultColors.BASICCOLORS.secondary};
      border-bottom: 2px solid ${defaultColors.BASICCOLORS.secondaryDark};
      &:hover {
        background-color: ${defaultColors.BASICCOLORS.secondaryDark};
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