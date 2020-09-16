import React from 'react';
import styled from 'styled-components';
import { CLEAR, FONTSIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';

interface Props {
  list: string[];
  onClick: (value: string) => void;
  state: string;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const StyledDiv = styled.div`
  width: 25vw;
  cursor: pointer;
  font-weight: 400px;
  font-size: ${FONTSIZE.LARGE}px;
`;
const StyledTargetDiv = styled(StyledDiv)`
  color: ${BASICCOLORS.SECONDARY};
`;

const ItemList: React.FC<Props> = ({ list, onClick, state }) => {
  return (
    <Flex>
      {list.map((title: string, num: number) => {
        return title === state ? (
          <StyledTargetDiv
            key={title}
            onClick={() => {
              onClick(title);
            }}
          >
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              {title}
            </Padding>
          </StyledTargetDiv>
        ) : (
          <StyledDiv
            key={title}
            onClick={() => {
              onClick(title);
            }}
          >
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              {title}
            </Padding>
          </StyledDiv>
        );
      })}
    </Flex>
  );
};

export default ItemList;
