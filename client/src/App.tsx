import React from 'react';
import Nav from './component/Nav';
import SearchTool from './component/SearchTool';
import Reset from './global/Reset';
import './global/font.css';
import styled, { ThemeProvider } from 'styled-components';
import Card from './component/card/Card';
import theme from './global/theme';

const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const App = () => {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <Nav />
        <Container>
          <SearchTool />
          <Card />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
