import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';

interface Props extends PartialWidthSize {
  component: JSX.Element;
  title?: string;
  widthTab?: SIZETYPE;
}

const StyledTable = styled.table<{ width: Props['width']; widthTab: Props['widthTab'] }>`
  width: ${(props) => props.width}vw;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
    width: ${(props: { widthTab: SIZETYPE }) => props.widthTab}vw;
      `}
`;

const Table: React.FC<Props> = ({
  title,
  component,
  width = SIZE.MEDIUM,
  widthTab = SIZE.LARGE,
}) => {
  return (
    <>
      {title && <div>{title}</div>}
      <StyledTable width={width} widthTab={widthTab}>
        <tbody>{component}</tbody>
      </StyledTable>
    </>
  );
};

export default Table;
