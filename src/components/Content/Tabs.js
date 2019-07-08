import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Tabs = props => {
  return (
    <TopicTabs>
      <Topics>
       
        {props.tabs.map(tab => {return <Tab key={tab}
          selectTabHandler={props.selectTabHandler} 
          selectedTab={props.selectedTab}
          tab={tab}></Tab>})}
          
      </Topics>
    </TopicTabs>
  );
};


Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;

const TopicTabs = styled.div`

`;

const Topics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
`;


