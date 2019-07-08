import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import styled from "styled-components";
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Reviews',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    const selectedTab = tab;
    this.setState({
      selected: selectedTab
    });
  };

  filterCards = () => {
    if (this.state.selected !== 'Reviews'){
      this.state.cards.forEach(card => {
        if (card.tab === this.state.selected) return card;
      })
    }
    return this.state.cards;
  };

  render() {
    return (
      <Container>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} selectedTab={this.state.selected} />
      </Container>
    );
  }
}



const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

