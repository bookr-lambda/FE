import React from 'react';
import Content from './components/Content/Content';
import styled from "styled-components";
import {Signup} from "./components/Signup";
import {Login} from "./components/Login";
import { NavLink, Route } from "react-router-dom";
const App = () => {
  return (
    <AppContainer>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
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