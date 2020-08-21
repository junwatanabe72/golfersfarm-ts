import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS, ICOLOR } from '../../utils/constant/color';
import { Padding } from '../../utils/styled/styledSpace';
import { FONTSIZE, CLEARTYPE, CLEAR, IFONTSIZE } from '../../utils/constant/number';
type PartialIFONTSIZE = Partial<IFONTSIZE>;
type PartialICOLOR = Partial<ICOLOR>;

interface Props extends PartialICOLOR, PartialIFONTSIZE {
  onClick?: () => void;
  pWidth?: CLEARTYPE;
  pHeight?: CLEARTYPE;
}
const DefaultButton = styled.a<Props>`
  font-size: ${(props) => props.fontSize}px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 6px;
  ${(props) => getButtonBcolor(props.color)};
  &:active {
    border-bottom: none;
  }
`;

const getButtonBcolor = (props: Props['color']) => {
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

const Button: React.FC<Props> = ({
  pHeight = CLEAR.TINY,
  pWidth = CLEAR.MEDIUM,
  color = BASICCOLORS.PRIMARY,
  onClick,
  children,
  fontSize = FONTSIZE.LARGE,
}) => {
  return (
    <DefaultButton color={color} onClick={onClick} fontSize={fontSize}>
      <Padding top={pHeight} bottom={pHeight} right={pWidth} left={pWidth}>
        {children}
      </Padding>
    </DefaultButton>
  );
};

export default Button;
