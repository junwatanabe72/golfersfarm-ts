import React from 'react';
import styled from 'styled-components';
import { FONTSIZE } from '../../utils/constant/number';
import { BASICCOLORS } from '../../utils/constant/color';
import { ALIGNITEMS } from '../../utils/styled/styledSpace';
import { media } from '../../utils/styled/styledRdesign';

interface Props extends PartialColor, PartialFontSize, PartialFontSizeWeight, PartialTextAlignType {
  fontSizeTab?: FONTSIZETYPE;
}

const Styledh2 = styled.h2<Props>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  ${media.tablet`
        font-size:${(props: { fontSizeTab: FontSize }) => props.fontSizeTab}px;
      `}
`;

const Logo: React.FC<Props> = ({
  fontSize = FONTSIZE.MEDIUM,
  textAlign = ALIGNITEMS.CENTER,
  fontWeight = 400,
  fontSizeTab,
  children,
  color = BASICCOLORS.PRIMARY,
}) => {
  return (
    <Styledh2
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontSizeTab={fontSizeTab}
      textAlign={textAlign}
    >
      {children}
    </Styledh2>
  );
};

export default Logo;
