import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS,COLORTYPES } from "../../utils/constant/color"


interface ButtonProps {
  color: COLORTYPES,
  onClick: () => void,
} 
const DefaultButton = styled.a < { color: COLORTYPES }>`
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

const getButtonBcolor = (props: COLORTYPES) => {
  if (props === BASICCOLORS.PRIMARY) {
    return `
      color: ${BASICCOLORS.BASIC};
      background-color: ${BASICCOLORS.PRIMARY};
      border-bottom: 2px solid ${BASICCOLORS.PRIMARYDARK};
      &:hover {
        background-color: ${BASICCOLORS.PRIMARYDARK};
      }
  `;
  } else if (props === BASICCOLORS.SECONDARY) {
    return `
      color: ${BASICCOLORS.WHITE};
      background-color: ${BASICCOLORS.SECONDARY};
      border-bottom: 2px solid ${BASICCOLORS.SECONDARYDARK};
      &:hover {
        background-color: ${BASICCOLORS.SECONDARYDARK};
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