import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import Image from '../../atoms/Image';
import Card from "../../molecules/Card";
import SNS from "../../molecules/SNSIcons";
import { ICLEAR,IWIDTH,IWIDTHTAB,IFONTSIZE } from "../../../utils/constant/number"
import { BASICCOLORS } from '../../../utils/constant/color';

type PartialIWIDTH = Partial<IWIDTH>
type PartialICLEAR = Partial<ICLEAR>
type PartialIWIDTHTAB = Partial<IWIDTHTAB>
type PartialIFONTSIZE = Partial<IFONTSIZE>
interface Props extends PartialICLEAR, PartialIWIDTH, PartialIWIDTHTAB, PartialIFONTSIZE{
  data: any,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UserCard: React.FC<Props> = ({ data, clear, width, widthTab, fontSize }) => {

  return (
    <Card color={BASICCOLORS.WHITELIGHT} clear={clear}>
      <Container>
        <Image image={data.image} width={width} widthTab={widthTab} />
        <LinkButton to={`/users/${data.id}`} fontSize={fontSize} color={BASICCOLORS.PRIMARY}>
          {data.name}
        </LinkButton>
        <SNS urls={data.url} color={BASICCOLORS.SECONDARY} fontSize={fontSize}/>
      </Container>
    </Card>
  )

}
export default UserCard;