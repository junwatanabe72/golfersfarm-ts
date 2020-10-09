import React from 'react';
import styled from 'styled-components';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import FlexLayout from '../../../atoms/FlexLayout';
import { sexLabels, showLabels } from '../../../../utils/constant/text/body/user/value';

type Options = typeof options['base'] | typeof options['golf'];
type Notes = typeof notes['base'];

interface Props {
  category: 'base' | 'golf' | 'sns' | 'other';
  formik: any;
}

const StyledSelect = styled.select`
  width: ${SIZE.XXXSMALL}vw;
  font-size: ${FONTSIZE.MEDIUM}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  ${media.tablet`
      width: ${SIZE.MEDIUMLARGE}vw;
      `}
`;

const Styleddiv = styled.div`
  margin: 0 auto;
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const Inline = styled.div`
  font-size: ${FONTSIZE.SMALL}px;
`;
const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

let iniScore = 54;
const bScore: number[] = [...Array(82)].map((_, i) => {
  return iniScore + i;
});
let iniDistance = 150;
const aDistance: number[] = [...Array(21)].map((_, i) => {
  return iniDistance + i * 10;
});

const items = {
  base: {
    sex: '性別',
    show: '公開・非公開',
  },
  sns: {},
  golf: {
    bestScore: 'ベストスコア',
    averageDistance: '平均飛距離',
  },
  other: {},
};
const options = {
  base: {
    sex: [sexLabels['male'], sexLabels['female']],
    show: [showLabels['open'], showLabels['close']],
  },
  sns: {},
  golf: {
    bestScore: bScore,
    averageDistance: aDistance,
  },
  other: {},
};
const notes = {
  base: {
    show: 'ログインユーザーのみに情報が公開されます。',
  },
};

const UserSelectItem: React.FC<Props> = ({ category, formik }) => {
  const notesItem = category === 'base' ? notes[category] : undefined;
  const optionsItem = options[category];
  return (
    <>
      {Object.entries(items[category]).map(([key, value], num: number) => {
        return (
          <React.Fragment key={num}>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <FlexLayout
                justifyContent={JUSTIFYCONTENT.START}
                width={SIZE.XXXSMALL}
                alignItems={ALIGNITEMS.START}
                left={
                  <Padding left={CLEAR.TINY}>
                    <StyledLabel htmlFor={key}>{value}</StyledLabel>
                  </Padding>
                }
                right={
                  <Padding left={CLEAR.MEDIUM}>
                    <StyledSelect name={key} onChange={formik.handleChange}>
                      <option value={formik.values[key as keyof UserType]}>
                        {formik.values[key as keyof UserType]}
                      </option>
                      {Object.values(optionsItem[key as keyof Options]).map(
                        (data: any, num: number) => {
                          return formik.values[key as keyof UserType] !== data ? (
                            <option key={num} value={data}>
                              {data}
                            </option>
                          ) : null;
                        }
                      )}
                    </StyledSelect>
                    {notesItem && <Inline>{notesItem[key as keyof Notes]}</Inline>}
                  </Padding>
                }
              />
            </Padding>
            {formik.touched[key as keyof UserType] && formik.errors[key as keyof UserType] ? (
              <Styleddiv>{formik.errors[key as keyof UserType]}</Styleddiv>
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default UserSelectItem;
