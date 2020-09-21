import React from 'react';
import styled from 'styled-components';
import TopTitle from '../organisms/top/Title';
import TopConcept from '../organisms/top/Concept';
import Layout from '../templates/Layout';
import TopUsage from '../organisms/top/Usage';
import { BASICCOLORS } from '../../utils/constant/color';
import { CLEAR, SIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  currentUser: PartialUserType;
}

const BackColor = styled.div<PartialColor>`
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const components: JSX.Element[] = [<TopTitle />, <TopUsage />, <TopConcept />];

const contents = components.map((d: JSX.Element, i: number) => {
  const color = i % 2 === 0 ? BASICCOLORS.WHITE : BASICCOLORS.WHITELIGHT;

  return (
    <BackColor key={i} color={color}>
      <Padding top={CLEAR.XSMALL} bottom={CLEAR.XSMALL}>
        <Container>{d}</Container>
      </Padding>
    </BackColor>
  );
});

const Top: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.MAX}>
      {contents}
    </Layout>
  );
};

export default Top;
