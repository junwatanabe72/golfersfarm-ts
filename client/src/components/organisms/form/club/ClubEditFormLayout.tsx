import React from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { gearTableItems } from '../../../../utils/constant/text/table';
import ClubEditItems from './ClubEditItems';
import { CLEAR } from '../../../../utils/constant/number';
import { Padding } from '../../../../utils/styled/styledSpace';

type FormikValueType = {
  formikClubs: ArrayClubType;
};

type GearTableItems = typeof gearTableItems;
interface Props {
  remove: <T>(index: number) => T | undefined;
}

const StyledLabel = styled.label`
  color: ${BASICCOLORS.BASICDARK};
`;

const StyledTrd = styled.tr`
  text-align: center;
`;

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const order = Object.keys(gearTableItems);

const head = [...order, ''].map((arg: string, num: number) => {
  return (
    <StyledTd key={arg}>
      <StyledLabel htmlFor={arg}>{gearTableItems[arg as keyof GearTableItems]}</StyledLabel>
    </StyledTd>
  );
});

const ClubEditFormLayout: React.FC<Props> = ({ remove }) => {
  const { values, handleChange } = useFormikContext<FormikValueType>();

  const selectItems = Object.values(values.formikClubs).map((club: ClubType, index: number) => {
    return [...order, ''].map((key: string) => {
      const name = `formikClubs.${index}.${key}`;
      return (
        <StyledTd key={key}>
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <ClubEditItems
              remove={remove}
              club={club}
              index={index}
              arg={key}
              name={name}
              onChange={handleChange}
            />
          </Padding>
        </StyledTd>
      );
    });
  });

  return (
    <>
      <StyledTrd>{head}</StyledTrd>
      {[...selectItems].map(
        (value: JSX.Element[], num: number): JSX.Element => {
          return <StyledTrd key={num}>{value}</StyledTrd>;
        }
      )}
    </>
  );
};

export default ClubEditFormLayout;
