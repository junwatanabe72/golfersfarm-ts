import React from 'react';
import styled from 'styled-components';
import { FONTSIZETYPE } from "../../utils/constant/number"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORTYPES } from "../../utils/constant/color"
import { IconName,IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FontAwesomeIconProps {
  head: "fas"|"fab"|"far",
  tail: IconName,
  fontSize?: FONTSIZETYPE,
  fontColor: COLORTYPES,
}

const Container = styled.div<{ fontColor: COLORTYPES, fontSize?: FONTSIZETYPE }>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

const ComponentFontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ fontColor,fontSize=24,head, tail }) => {
  const Lookup: IconLookup = { prefix: head, iconName: tail };
  const IconDefinition: IconDefinition = findIconDefinition(Lookup);
  return (
    <Container fontSize={fontSize} fontColor={fontColor}>
      <FontAwesomeIcon icon={IconDefinition} />
    </Container>
  );
};

export default ComponentFontAwesomeIcon;
