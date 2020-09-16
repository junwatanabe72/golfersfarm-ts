import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { allTypes, makers, shafts } from '../../../../utils/constant/text/body/user/value';
import { Padding } from '../../../../utils/styled/styledSpace';
import Button from '../../../atoms/Button';
interface Props {
  arg: string;
  index: number;
  remove: <T>(index: number) => T | undefined;
  club: ClubObjectType;
  name: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const StyledTd = styled.td`
  min-width: 20px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const StyledField = styled.input`
  width: ${SIZE.XXXSMALL}vw;
  font-size: ${FONTSIZE.MEDIUM}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.XXSMALL}vw;
      font-size: 1px;
      `}
`;

const StyledSelect = styled.select`
  width: ${SIZE.XXXSMALL}vw;
  font-size: ${FONTSIZE.MEDIUM}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.XXSMALL}vw;
      font-size: 1px;
      `}
`;
const Styleddiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const ClubEditItems: React.FC<Props> = ({ arg, club, name, index, onChange, remove }) => {
  const [, meta] = useField(name);
  return (
    <StyledTd>
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        {arg === 'name' ? (
          <>
            <StyledField
              type={'text'}
              name={name}
              placeholder={'入力してください。'}
              onChange={onChange}
              value={club[arg]}
            />
            {meta.touched && meta.error ? <Styleddiv>{meta.error}</Styleddiv> : null}
          </>
        ) : arg === '' ? (
          <Button
            pWidth={CLEAR.TINY}
            pHeight={CLEAR.TINY}
            color={BASICCOLORS.SECONDARY}
            fontSize={FONTSIZE.BASE}
            onClick={() => {
              remove(index);
            }}
          >
            ×
          </Button>
        ) : (
          <>
            <StyledSelect name={name} onChange={onChange}>
              <option value={arg}>{club[arg]}</option>
              {arg === 'type'
                ? Object.values(allTypes).map((data: TypeData, num: number) => {
                    const { type } = data;
                    return club[arg] !== type ? (
                      <option key={num} value={type}>
                        {type}
                      </option>
                    ) : null;
                  })
                : arg === 'maker'
                ? Object.values(makers).map((data: MakerData, num: number) => {
                    const { name } = data;
                    return club[arg] !== name ? (
                      <option key={num} value={name}>
                        {name}
                      </option>
                    ) : null;
                  })
                : arg === 'shaft'
                ? Object.values(shafts).map((data: ShaftData, num: number) => {
                    const { name } = data;
                    return club[arg] !== name ? (
                      <option key={num} value={name}>
                        {name}
                      </option>
                    ) : null;
                  })
                : arg === 'flex'
                ? Object.values(shafts).map((data: ShaftData, num: number) => {
                    const { flex } = data;
                    return club[arg] !== flex ? (
                      <option key={num} value={flex}>
                        {flex}
                      </option>
                    ) : null;
                  })
                : null}
            </StyledSelect>
          </>
        )}
      </Padding>
    </StyledTd>
  );
};

export default ClubEditItems;
