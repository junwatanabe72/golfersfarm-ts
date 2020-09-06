import React from 'react';
import styled from 'styled-components';
import LinkButton from '../atoms/LinkButton';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props extends ICOLOR, PartialICLEAR {
  route: any;
}

const LinkList: React.FC<Props> = ({ color, route, clear = CLEAR.TINY }) => {
  const list = Object.entries(route).map(([key, value]: any) => {
    return (
      <LinkButton to={value} color={color}>
        <Padding all={clear}>{key}</Padding>
      </LinkButton>
    );
  });
  return <>{list}</>;
};

export default LinkList;
