import React from 'react';
import Nav from './Nav'
import SearchTool from './SearchTool' 
import styled, { createGlobalStyle } from 'styled-components'
const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const Reset = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
 display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
 display: none;
}
body {
 line-height: 1;
}
menu, ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}
input:focus {
  outline:none;
}
`;
const Font = createGlobalStyle`
    @font-face {
      font-family: 'abc';
      src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
    }
    * {
    font-family: 'abc';
  }
`;
export default function Test() {
  return <>
    <Reset/>
    <Font/>
    <Nav/>
    <Container>
      
      <SearchTool/>
    </Container>
  </>
}

