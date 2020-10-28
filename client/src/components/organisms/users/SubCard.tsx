import React from 'react';
import styled from 'styled-components';
import Card from '../../molecules/Card';
import Image from '../../atoms/Image';
import { CLEAR, SIZE } from '../../../utils/constant/number';
import { JUSTIFYCONTENT, ALIGNITEMS } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';
interface Props {
  data: PartialUserType;
}

const Flex = styled.div`
  display: flex;
  justify-content: ${JUSTIFYCONTENT.CENTER};
  align-items: ${ALIGNITEMS.CENTER};
  ${media.tablet`
      display:none;
      `}
`;

const SubCard: React.FC<Props> = ({ data }) => {
  const { clubImage } = data;

  return (
    <Flex>
      <Card clear={CLEAR.TINY} title={'Clubs'}>
        <Image image={clubImage} width={SIZE.XXXSMALL} widthTab={SIZE.SMALL} />
      </Card>
    </Flex>
  );
};
export default SubCard;
