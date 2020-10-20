import React from 'react';
import Layout from '../templates/Layout';
import TopConcept from '../organisms/top/Concept';

interface Props {
  currentUser: PartialUserType;
}

const About: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser}>
      <TopConcept />
    </Layout>
  );
};

export default About;
