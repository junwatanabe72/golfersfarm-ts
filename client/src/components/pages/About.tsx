import React from 'react';
import Layout from '../templates/Layout';
import Concept from '../organisms/about';

interface Props {
  currentUser: CurrentUserType;
}

const About: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser}>
      <Concept />
    </Layout>
  );
};

export default About;
