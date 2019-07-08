import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";



const Tab = props => {

  return (
    <Tabs
      tabSelected={props.tab === props.selectedTab && 'activeTab'}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </Tabs>
  );
};


Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  'get key': PropTypes.func
}

export default Tab;

const Tabs = styled.div`
  margin: 10px;
  padding: 3px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  background-color: black;
  font-size: 12px;
  letter-spacing: 1.25px;
  cursor: pointer;
  font-weight: bold;

  &:hover {text-decoration: underline;}
  

  ${props =>
    props.tabSelected === 'activeTab' && css`
      
    `}
`;