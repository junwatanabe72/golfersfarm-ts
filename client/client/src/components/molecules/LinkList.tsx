import React from 'react';
import styled from 'styled-components';
import LinkButton from '../atoms/LinkButton';
import { ICOLOR } from "../../utils/constant/color";
import { CLEAR,CLEARTYPE } from "../../utils/constant/number";
import { Padding } from '../../utils/styled/styledSpace';

interface Props extends ICOLOR {
  route: any,
  num?: CLEARTYPE,
};

const LinkList: React.FC<Props> = ({ color,route,num=CLEAR.TINY}) => {
  const list = Object.entries(route).map((eachRoute:any) => {
    return (
      <LinkButton to={eachRoute[1]} color={color} >
        <Padding all={num}>
          {eachRoute[0]}
        </Padding>
      </LinkButton>
    );
  });
  return (
      <>
        {list}
      </>
  );
}

export default LinkList;