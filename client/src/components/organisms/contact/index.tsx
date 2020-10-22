import React, { useEffect } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import Button from '../../atoms/Button';
import { sendMessage } from '../../../actions';
import { Padding } from '../../../utils/styled/styledSpace';
import { CLEAR } from '../../../utils/constant/number';
import { BASICCOLORS } from '../../../utils/constant/color';
import { emailValidation, nameValidation, urlValidation } from '../../../validations';
import { useDialog } from '../../../hooks/dialog';
import Dialog from '../../atoms/form/Dialog';
import ContactItem from './ContactItems';

interface Props {}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
`;

const Styleddiv = styled.div`
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const formDatas = {
  email: '',
  title: '',
  value: '',
};
const labels = {
  email: '返信用メールアドレス',
  title: 'ご用件',
  value: 'お問合せの内容',
};
type Labels = typeof labels;
const buttonValue = '送信する';

const validation = () =>
  yup.object().shape({
    email: emailValidation(),
    title: nameValidation(),
    value: urlValidation(),
  });

const ContactForm: React.FC<Props> = () => {
  const { ref, showDialog, closeDialog } = useDialog();
  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);

  const onSubmit = (values: ContactType) => {
    dispatch(sendMessage(values));
  };

  const formik = useFormik({
    initialValues: formDatas,
    validationSchema: validation,
    onSubmit: onSubmit,
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        {Object.keys(formDatas).map((key: string, num: number) => {
          return (
            <React.Fragment key={num}>
              <div>{labels[key as keyof Labels]}</div>
              <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                <ContactItem formik={formik} valueKey={key} />
              </Padding>
              {formik.touched[key as keyof ContactType] &&
              formik.errors[key as keyof ContactType] ? (
                <Styleddiv>{formik.errors[key as keyof ContactType]}</Styleddiv>
              ) : null}
            </React.Fragment>
          );
        })}
        <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}></Padding>
        <Center>
          <StyledButton type="button" onClick={showDialog}>
            <Button pWidth={CLEAR.BASE}>{buttonValue}</Button>
          </StyledButton>
        </Center>
        <Dialog onClick={closeDialog} propsRef={ref} />
      </StyledForm>
    </>
  );
};

export default ContactForm;
