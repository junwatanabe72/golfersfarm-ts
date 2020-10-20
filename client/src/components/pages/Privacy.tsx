import React from 'react';
import Layout from '../templates/Layout';
import PrivacyContents from '../organisms/privacy';
import { SIZE, CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  currentUser: PartialUserType;
}

const Privacy: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <PrivacyContents />
      </Padding>
    </Layout>
  );
};

export default Privacy;
