import React from 'react';
import Layout from '../templates/Layout';
import TosContents from '../organisms/tos';
import { CLEAR, SIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  currentUser: CurrentUserType;
}

const Tos: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <TosContents />
      </Padding>
    </Layout>
  );
};

export default Tos;
