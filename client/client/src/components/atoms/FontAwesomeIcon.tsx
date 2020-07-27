import React from 'react';
import styled from 'styled-components';
import { fontType } from "../../utils/constant/number"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName,IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FontAwesomeIconProps {
  head: "fas"|"fab"|"far",
  tail: IconName,
  fontSize?: fontType,
}

const Container = styled.div<{ fontSize?: fontType}>`
  font-size: ${(props) => props.fontSize}px;
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

const ComponentFontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ fontSize=32,head, tail }) => {
  const Lookup: IconLookup = { prefix: head, iconName: tail };
  const IconDefinition: IconDefinition = findIconDefinition(Lookup);
  return (
    <Container fontSize={fontSize}>
      <FontAwesomeIcon icon={IconDefinition} />
    </Container>
  );
};

export default ComponentFontAwesomeIcon;
