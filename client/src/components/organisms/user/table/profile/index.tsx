import React from 'react';
import styled from 'styled-components';
import Items from './ProfileItems';
import {
  profileTableItems,
  profileTableSubItemsA,
  profileTableSubItemsB,
} from '../../../../../utils/constant/text/table';
import {
  sexValues,
  classValues,
  bloodValues,
  historyValues,
  sexLabels,
  classLabels,
  bloodLabels,
  historyLabels,
} from '../../../../../utils/constant/text/body/user/value';

type TableItems =
  | typeof profileTableItems
  | typeof profileTableSubItemsA
  | typeof profileTableSubItemsB;

type SexLabels = typeof sexLabels;
type ClassLabels = typeof classLabels;
type BloodLabels = typeof bloodLabels;
type HistoryLabels = typeof historyLabels;
type ShowLabel = SexLabels | ClassLabels | BloodLabels | HistoryLabels;
interface Props extends PartialWidthSize {
  data: PartialUserType;
  tableItems: TableItems;
}

const StyledTrd = styled.tr`
  border-top: solid 1px #ccc;
  text-align: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;
const values = {
  sex: sexValues,
  classification: classValues,
  blood: bloodValues,
  history: historyValues,
};
const labels = {
  sex: sexLabels,
  classification: classLabels,
  blood: bloodLabels,
  history: historyLabels,
};
type Values = typeof values;
type Labels = typeof labels;

const UserProfile: React.FC<Props> = ({ data, tableItems }) => {
  const order = Object.keys(tableItems);
  return (
    <>
      {order.map((key: string, num: number) => {
        const initialValue = data[key as keyof UserType];
        const targetValue = values[key as keyof Values];
        const convertValue = targetValue
          ? Object.entries(targetValue).find(([key, value]) => value === initialValue)
          : undefined;
        const showLabel = labels[key as keyof Labels];
        const showValue = convertValue
          ? showLabel[convertValue[0] as keyof ShowLabel]
          : initialValue;

        return (
          <StyledTrd key={num}>
            <Items valueKey={key} value={showValue} label={tableItems[key as keyof TableItems]} />
          </StyledTrd>
        );
      })}
    </>
  );
};

export default UserProfile;
