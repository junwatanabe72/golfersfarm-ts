import React from 'react';
import styled from 'styled-components';
import Table from "../../atoms/Table";
import { media } from '../../../utils/styled/styledRdesign';
import { WIDTH, IWIDTH } from "../../../utils/constant/number"
import { Padding } from "../../../utils/styled/styledSpace";
import { BASICCOLORS } from "../../../utils/constant/color"
type PartialIWIDTH = Partial<IWIDTH>
interface Props extends PartialIWIDTH {
  
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
  ${media.tablet`
  display: flex;
        flex-direction: column;
        align-items: center;
      `}
`;

const UserProfile: React.FC<Props> = ({ width  }) => {
  return (
    <Container>
        <Table datas={datas} width={width}/>
    </Container>
  );
}

export default UserProfile;