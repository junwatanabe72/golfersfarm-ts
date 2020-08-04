import React from 'react';
import styled from 'styled-components';
import Table from "../../atoms/Table";
import { media } from '../../../utils/styled/styledRdesign';
import { WIDTH, VWWIDTH } from "../../../utils/constant/number"
import { Padding } from "../../../utils/styled/styledSpace";
import { BASICCOLORS } from "../../../utils/constant/color"
type PartialVWWIDTH = Partial<VWWIDTH>
interface Props extends PartialVWWIDTH {

}

const datas = [
  {
    arg: "性別",
    value: "男性",
  },
  {
    arg: "出生地",
    value: "栃木県",
  },
  {
    arg: "現住所",
    value: "神戸市",
  },
  {
    arg: "職業",
    value: "不動産",
  },
  {
    arg: "出身校",
    value: "学習院大学",
  },
  {
    arg: "趣味",
    value: "プログラミング",
  },
]


const BackColor = styled.div`
  background-color: ${BASICCOLORS.SECONDARY};
`;


const Container = styled.div`
  display: flex;
  max-width: 896px;
  // background-color: ${BASICCOLORS.SECONDARY};
  overflow-x: auto;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const UserVideo: React.FC<Props> = ({ vwWidth }) => {
  // console.log(vwWidth)
  return (


    <Container>
      <iframe width="200" height="315" src="https://www.youtube.com/embed/yAqnTCtHQMM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <iframe width="200" height="315" src="https://www.youtube.com/embed/yAqnTCtHQMM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <iframe width="200" height="315" src="https://www.youtube.com/embed/yAqnTCtHQMM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Container>


  );
}

export default UserVideo;
