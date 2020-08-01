import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS,ICOLOR } from "../../utils/constant/color"

type PartialICOLOR = Partial<ICOLOR>

interface Props extends PartialICOLOR {
  onClick?: () => void,
} 
const DefaultButton = styled.a<Props>`
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

const getButtonBcolor = (props: Props["color"]) => {
  if (props === BASICCOLORS.PRIMARY) {
    return `
      color: ${BASICCOLORS.WHITE};
      background-color: ${BASICCOLORS.PRIMARY};
      border-bottom: 2px solid ${BASICCOLORS.PRIMARYDARK};
      &:hover {
        color: ${BASICCOLORS.WHITE};
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
  } else if (props === BASICCOLORS.WHITELIGHT) {
    return `
      color: ${BASICCOLORS.PRIMARY};
      background-color: ${BASICCOLORS.WHITELIGHT};
      border: 2px solid ${BASICCOLORS.PRIMARY};
      &:hover {
        color: ${BASICCOLORS.WHITE};
        background-color: ${BASICCOLORS.PRIMARY};
      }
  `;
}
};

const Button: React.FC<Props>=({color,onClick,children}) => {
  return (
    <DefaultButton color={color} onClick={onClick}>
      {children}
    </DefaultButton>
  );
}

export default Button;