import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Cards = props => {
  let cardsToDisplay
  if (props.selectedTab !== 'Reviews'){
    cardsToDisplay = props.cards.filter(card => card.tab === props.selectedTab);
  } else {
    cardsToDisplay = props.cards;
  }
  return (
    <CardContainer>
      {
        
        cardsToDisplay.map(card => {
          return <Card key={card.headline} card={card}/>
        })
      }
    </CardContainer>
  )
}

Cards.propTypes = {
  Cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  })),
  selectedTab: PropTypes.string
}

export default Cards;

const CardContainer = styled.div`
  // width: 100%;
  // margin-top: 16px;
  // display: flex;
  // flex-direction: row;
  // align-items: none;
  // flex-wrap: wrap;
  // justify-content: space-evenly;
  
  // @media (min-width: 1200px) {
  //   width: 1200px;
  }
`;
