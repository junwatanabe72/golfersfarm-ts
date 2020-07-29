import React from 'react';
import styled from 'styled-components';
import { fontType } from "../../utils/constant/number"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorType } from "../../utils/constant/color"
import { IconName,IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FontAwesomeIconProps {
  head: "fas"|"fab"|"far",
  tail: IconName,
  fontSize?: fontType,
  fontColor: colorType,
}

const Container = styled.div<{ fontColor: colorType, fontSize?: fontType }>`
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
