import React from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { resultTableItems } from '../../../../utils/constant/text/table';
import ResultEditItems from './ResultEditItems';
import { CLEAR } from '../../../../utils/constant/number';
import { Padding } from '../../../../utils/styled/styledSpace';

interface FormikValueType<T> {
  formikValues: T;
}

type ResultTableItems = typeof resultTableItems;
interface Props {
  formikKey: string;
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
const order = Object.keys(resultTableItems);

const head = [...order, ''].map((arg: string, num: number) => {
  return (
    <StyledTd key={arg}>
      <StyledLabel htmlFor={arg}>{resultTableItems[arg as keyof ResultTableItems]}</StyledLabel>
    </StyledTd>
  );
});

const ResultEditFormLayout: React.FC<Props> = ({ remove, formikKey }) => {
  const { values, handleChange } = useFormikContext<FormikValueType<ArrayResultType>>();

  const selectItems = Object.values(values.formikValues).map(
    (result: ResultType, index: number) => {
      return [...order, 'button'].map((key: string) => {
        const name = `${formikKey}.${index}.${key}`;
        return (
          <StyledTd key={key}>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <ResultEditItems
                remove={remove}
                result={result}
                index={index}
                arg={key}
                name={name}
                onChange={handleChange}
              />
            </Padding>
          </StyledTd>
        );
      });
    }
  );

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

export default ResultEditFormLayout;
