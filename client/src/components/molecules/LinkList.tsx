import React from 'react';
import styled from 'styled-components';
import LinkButton from '../atoms/LinkButton';
import { ICOLOR } from '../../utils/constant/color';
import { CLEAR, ICLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

type PartialICLEAR = Partial<ICLEAR>;
interface Props extends ICOLOR, PartialICLEAR {
  route: any;
}

const LinkList: React.FC<Props> = ({ color, route, clear = CLEAR.TINY }) => {
  const list = Object.entries(route).map((eachRoute: any) => {
    return (
      <LinkButton to={eachRoute[1]} color={color}>
        <Padding all={clear}>{eachRoute[0]}</Padding>
      </LinkButton>
    );
  });
  return <>{list}</>;
};

export default LinkList;
