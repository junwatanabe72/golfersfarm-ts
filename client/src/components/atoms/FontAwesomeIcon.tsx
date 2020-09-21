import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE } from '../../utils/constant/number';
import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props extends PartialColor, PartialFontSize, MENUZTYPE {}

const Container = styled.div<{ color: Props['color']; fontSize: Props['fontSize'] }>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

const ComponentFontAwesomeIcon: React.FC<Props> = ({
  color = BASICCOLORS.SECONDARY,
  fontSize = FONTSIZE.LARGE,
  head,
  tail,
}) => {
  const Lookup: IconLookup = { prefix: head, iconName: tail };
  const IconDefinition: IconDefinition = findIconDefinition(Lookup);
  return (
    <Container fontSize={fontSize} color={color}>
      <FontAwesomeIcon icon={IconDefinition} />
    </Container>
  );
};

export default ComponentFontAwesomeIcon;
