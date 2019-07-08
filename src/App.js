import React from 'react';
import Content from './components/Content/Content';
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <Content />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: -8px;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
`;