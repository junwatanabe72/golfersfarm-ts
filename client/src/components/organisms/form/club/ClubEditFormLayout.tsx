import React from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { gearTableItems } from '../../../../utils/constant/text/table';
import ClubEditItems from './ClubEditItems';

type FormikValueType = {
  formikClubs: ClubTableTypes;
};

type TypeGearTableItems = typeof gearTableItems;
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

const order = Object.keys(gearTableItems).map((key: string) => {
  return key;
});

const ClubEditFormLayout: React.FC<Props> = ({ remove }) => {
  const { values, handleChange } = useFormikContext<FormikValueType>();

  const head = [...order, ''].map((arg: string) => {
    return (
      <StyledTd>
        <StyledLabel htmlFor={arg}>{gearTableItems[arg as keyof TypeGearTableItems]}</StyledLabel>
      </StyledTd>
    );
  });

  const selectItems = Object.values(values.formikClubs).map(
    (club: ClubObjectType, index: number) => {
      return [...order, ''].map((key: string) => {
        const name = `formikClubs.${index}.${key}`;
        return (
          <ClubEditItems
            remove={remove}
            club={club}
            index={index}
            arg={key}
            name={name}
            onChange={handleChange}
          />
        );
      });
    }
  );

  const editElements = [...selectItems];
  const elements = editElements.map(
    (value: JSX.Element[]): JSX.Element => {
      return <StyledTrd>{value}</StyledTrd>;
    }
  );

  return (
    <>
      <StyledTrd>{head}</StyledTrd>
      {elements}
    </>
  );
};

export default ClubEditFormLayout;
