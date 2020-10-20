import React from 'react';
import Layout from '../templates/Layout';

interface Props {
  currentUser: PartialUserType;
}
const contactTitle = '作成中。';

const Contact: React.FC<Props> = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>{contactTitle}</Layout>;
};

export default Contact;
