import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import LinkButton from '../atoms/LinkButton';
import Image from '../atoms/Image';
import { ROUTE, routeType } from "../../utils/constant/route"
import { defaultColors, colorType } from "../../utils/constant/color"
import { defaultSize } from "../../utils/constant/number"


const Users: React.FC = () => {
  return (
    <div className="App">
      <Logo fontsize={defaultSize.FONT.XXXLARGE}>UsersPage</Logo>
      {/* <Input />
      <TextArea
        placeHolder="sample"
        value="value"
        onChange={() => {
          window.alert('Hello world!');
        }}
      /> */}
      <LinkButton to={ROUTE.TOP} color={defaultColors.BASICCOLORS.primary}>
        index?
      </LinkButton>
      </div>
  )
}

export default Users;