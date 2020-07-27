import React from 'react';
import styled from 'styled-components';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
// import Header from './components/templates/Header';
import Button from './components/atoms/Button';
import Logo from './components/atoms/Logo';
import Input from './components/atoms/Input';
import TextArea from './components/atoms/TextArea';
import Image from './components/atoms/Image';
import ComponentFontAwesomeIcon from './components/atoms/FontAwesomeIcon';
import LinkButton from './components/atoms/LinkButton';
import { defaultSize } from "./utils/constant/number"
import { defaultColors, colorType } from "./utils/constant/color"
import { ROUTE, routeType } from "./utils/constant/route"
import { PdComponent } from "./utils/styled/styledSpace"
// import Body from './components/templates/Body';
// import Modal from './container/ModalContainer';

import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fas,far,fab);

const Styledh2 = styled.h2`
  display: flex;
`;

async function axiosGet(){
  const data = await axios.get("http://localhost:3000/users");
  console.log({data});
}
const URL ="https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"
const App: React.FC =():JSX.Element =>{
  return (
    <div className="App">
      <Logo fontsize={defaultSize.FONT.XXXLARGE}>Golfersfarm</Logo>
      <Input />
      <TextArea
        placeHolder="sample"
        value="value"
        onChange={() => {
          window.alert('Hello world!');
        }}
      />
      <Image image={URL} width={100} />
      <ComponentFontAwesomeIcon head="fab" tail="accessible-icon" />
      <Router>
        <Route exact path={ROUTE.INDEX}>
          <Logo fontsize={defaultSize.FONT.XXXLARGE}>GolfersfarmINDEX</Logo>
          <LinkButton to={ROUTE.USER(1)} color={defaultColors.BASICCOLORS.primary}>
            issueへ
          </LinkButton>
          <LinkButton to={ROUTE.USERS} color={defaultColors.BASICCOLORS.primary}>/へ</LinkButton>
        </Route>
        <Route path={ROUTE.USER(1)}>
          <Styledh2>
            <LinkButton to={ROUTE.USERS} color={defaultColors.BASICCOLORS.secondary}>
              profileへ
            </LinkButton>
            <LinkButton to={ROUTE.INDEX} color={defaultColors.BASICCOLORS.primary}>/へ</LinkButton>
          </Styledh2>
          <PdComponent top={10} right={40}>
            <Button
              color={defaultColors.BASICCOLORS.primary}
              onClick={() => {
                console.log('test');
              }}
            >
              test
            </Button>
          </PdComponent>
        </Route>
        <Route path={ROUTE.USERS}>
          <LinkButton to={ROUTE.USER(1)} color={defaultColors.BASICCOLORS.primary}>
            issueへ
          </LinkButton>
          <LinkButton to={ROUTE.INDEX} color={defaultColors.BASICCOLORS.primary}>/へ</LinkButton>
          <PdComponent top={10} right={40}>
            <Button
              color={defaultColors.BASICCOLORS.secondary}
              onClick={() => {
                console.log('test');
              }}
            >
              sample
            </Button>
          </PdComponent>
        </Route>
      </Router>
    </div>
  );
}

export default App;
