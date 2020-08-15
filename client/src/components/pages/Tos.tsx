import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import LinkButton from '../atoms/LinkButton';
import Image from '../atoms/Image';
import Layout from '../templates/Layout';
import { ROUTE, ROUTETYPE } from '../../utils/constant/route';
import { BASICCOLORS, COLORTYPES } from '../../utils/constant/color';
import { FONTSIZE } from '../../utils/constant/number';
import { PartialIUserData } from '../../actions';

interface Props {
  currentUser: PartialIUserData;
}

const Tos: React.FC<Props> = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>Tos</Layout>;
};

export default Tos;
