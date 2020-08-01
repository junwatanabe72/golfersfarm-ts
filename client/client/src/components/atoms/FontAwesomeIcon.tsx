import React from 'react';
import styled from 'styled-components';
import { FONTSIZETYPE, FONTSIZE } from "../../utils/constant/number"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORTYPES,ICOLOR } from "../../utils/constant/color";
import { IFONTSIZE } from "../../utils/constant/number";
import { IconName,IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';


type PartialIFONTSIZE = Partial<IFONTSIZE>

interface Props extends ICOLOR,PartialIFONTSIZE {
  head: "fas"|"fab"|"far",
  tail: IconName,
}

const Container = styled.div<{ color: ICOLOR["color"], fontSize: PartialIFONTSIZE["fontSize"]}>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

const ComponentFontAwesomeIcon: React.FC<Props> = ({ color,fontSize=24,head, tail }) => {
  const Lookup: IconLookup = { prefix: head, iconName: tail };
  const IconDefinition: IconDefinition = findIconDefinition(Lookup);
  return (
    <Container fontSize={fontSize} color={color}>
      <FontAwesomeIcon icon={IconDefinition} />
    </Container>
  );
};

export default ComponentFontAwesomeIcon;
