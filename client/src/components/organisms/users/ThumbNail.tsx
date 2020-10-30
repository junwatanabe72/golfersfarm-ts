import React from 'react';
import styled from 'styled-components';
import UsersCard from './UsersCard';
import { CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import SubCard from './SubCard';
import { media } from '../../../utils/styled/styledRdesign';
import Card from '../../molecules/Card';

interface Props {
  datas: ArrayPartialUserType;
}
const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  top: 0;
  flex-direction: column;
`;
const Flex = styled.div`
  display: flex;
  ${media.tablet`
  flex-direction: column;
      `}
`;

const ThumbNail: React.FC<Props> = ({ datas }) => {
  return (
    <Container>
      {datas.length !== 0 ? (
        datas.map((data: PartialUserType, num: number) => {
          return (
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY} key={num}>
              <Flex>
                <UsersCard data={data} />
                <Padding all={CLEAR.TINY} />
                <SubCard data={data} />
              </Flex>
            </Padding>
          );
        })
      ) : (
        <Card>userがいません。</Card>
      )}
    </Container>
  );
};
export default ThumbNail;
