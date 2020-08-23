import React from 'react';
import styled from 'styled-components';
import { SIZE, PartialIWIDTH } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';
import { ITABLETYPES, TABLETYPES } from '../../../utils/constant/text/tableType';
import {
  PartialUserObjectType,
  PartialClubTableTypes,
  PartialResultTableTypes,
} from '../../../utils/constant/storeType';
import {
  profileTableItemsType,
  gearTableItemsType,
  resultTableItemsType,
} from '../../../utils/constant/text/body/user/text';
import VerticalTable from './VerticalTable';
import HorizontalTable from './HorizontalTable';

interface Props extends PartialIWIDTH, ITABLETYPES {
  datas: PartialUserObjectType | PartialClubTableTypes | PartialResultTableTypes;
  tableItems: profileTableItemsType | gearTableItemsType | resultTableItemsType;
}

const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  border: solid 1px #ccc;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: 60vw;  
      `}
`;

StyledTable.defaultProps = {
  width: SIZE.MEDIUM,
};

const Table: React.FC<Props> = ({ datas, width, type, tableItems }) => {
  return (
    <>
      {type === TABLETYPES.HORIZONTAL ? (
        <HorizontalTable datas={datas} width={width} tableItems={tableItems} />
      ) : (
        <VerticalTable datas={datas} width={width} tableItems={tableItems} />
      )}
    </>
  );
};

export default Table;
