import React from 'react';
import Layout from '../templates/Layout';

interface Props {
  currentUser: PartialUserObjectType;
}

const Privacy: React.FC<Props> = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>About</Layout>;
};

export default Privacy;
