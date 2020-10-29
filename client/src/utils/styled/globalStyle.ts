import { createGlobalStyle } from 'styled-components';
import { BASICCOLORS } from '../constant/color';
import { media } from '../../utils/styled/styledRdesign';
import { FONTSIZE } from '../constant/number';
export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: ${FONTSIZE.MEDIUM}px;
    color: ${BASICCOLORS.BASIC};
    font-weight: 400; 
    ${media.tablet`
        font-size: ${FONTSIZE.BASE}px;
      `}
  }
  body {
    padding: 0;
    margin: 0; 
  }
  h2{
    padding: 0;
    margin: 0; 
  }
  ul {
    padding: 0;
    margin: 0; 
  }
  iframe {
    padding: 0;
    margin: 0; 
  }
  li {
    list-style-type: none;
  }
  img{
	vertical-align:top;
}
  a {
    text-decoration: none;
    color: ${BASICCOLORS.WHITELIGHT};
  }
  textarea{
    min-height: 150px;
  }
  a:visited {
    color: none;
  }
`;
