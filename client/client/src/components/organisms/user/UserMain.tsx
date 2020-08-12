import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image';
import Logo from '../../atoms/Logo';
import { BASICCOLORS, ICOLOR } from "../../../utils/constant/color"
import { WIDTH,CLEAR, FONTSIZE } from "../../../utils/constant/number";
import { FONTAWEICON } from '../../../utils/constant/text/text';
import { Padding } from "../../../utils/styled/styledSpace";
import Table from "../../atoms/Table";
import Url from "../../atoms/Url";
import Card from "../../molecules/Card";
import SNS from "../../molecules/SNSIcons";
import ComponentFontAwesomeIcon from '../../atoms/FontAwesomeIcon';
import { sampleUserMainDatas} from "../../../utils/constant/text/body/user/text";

interface Props {

}

type PartialICOLOR = Partial<ICOLOR>
const BackColor = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;
BackColor.defaultProps = {
  color: BASICCOLORS.WHITE
}

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 50px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const facebook ="https://www.facebook.com/junwatanabe72";
const twitter ="https://twitter.com/junwata72"
const userName = "JUNWATANABE72";
const instagram ="https://www.instagram.com/ruby.on/"
const youtube ="https://www.youtube.com/channel/UC-hTmh_CtqIUphbwd8Eu6EQ"

const urls = {
  facebook: facebook,
  twitter: twitter,
  instagram: instagram,
  youtube: youtube,
}

const URL = "https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"

const UserMain: React.FC<Props> = () => {
  return (
      <Container>
        <Card color={BASICCOLORS.WHITELIGHT} clear={CLEAR.XSMALL}>
          <Image image={URL} width={WIDTH.XXSMALL} />
          <Logo fontSize={FONTSIZE.XLARGE} color={BASICCOLORS.PRIMARY}>{userName}</Logo>
          <SNS urls={urls} color={BASICCOLORS.SECONDARY}/>
        </Card>
        <Padding all={CLEAR.XSMALL}/>
        <Card color={BASICCOLORS.WHITELIGHT} clear={CLEAR.XSMALL}>
          <Table datas={sampleUserMainDatas} width={WIDTH.XXSMALL} />
        </Card>
      </Container>
  )
}

export default UserMain;