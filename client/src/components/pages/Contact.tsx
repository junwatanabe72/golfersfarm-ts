import React from 'react';
import Layout from '../templates/Layout';
import ContactForm from '../organisms/contact';
import { Padding, ALIGNITEMS } from '../../utils/styled/styledSpace';
import Sign from '../molecules/Sign';
import { CLEAR, SIZE } from '../../utils/constant/number';

interface Props {
  currentUser: CurrentUserType;
}
const text = 'ご要望、ご意見等々ございましたら、下記フォームよりお問い合わせください。';

const Contact: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={'お問い合わせフォーム'} alignItems={ALIGNITEMS.CENTER}>
          <Padding all={CLEAR.SMALL}>{text}</Padding>
          <Padding top={CLEAR.SMALL} bottom={CLEAR.SMALL}>
            <ContactForm />
          </Padding>
          <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}></Padding>
        </Sign>
      </Padding>
    </Layout>
  );
};

export default Contact;
