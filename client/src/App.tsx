import React from 'react';
import Nav from './component/Nav';
import SearchTool from './component/SearchTool';
import Reset from './global/Reset';
import './global/font.css';
import styled from 'styled-components';
import Card from './component/card/Card';
const Container = styled.div`
  width: 60%;
  margin: auto;
`;
const App = () => {
  return (
    <>
      <Reset />
      <Nav />
      <Container>
        <SearchTool />
        <Card />
      </Container>
    </>
  );
};

export default App;
