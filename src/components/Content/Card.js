import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Card = props => {
  return (
    <CardBody>

      <Left>
        <Artist>{props.card.title}</Artist>

        <ImgContainer>
          <Img src={props.card.img} alt="albumcover" />
        </ImgContainer>

        <Album>
          <Title>{props.card.author}</Title>
        </Album>
      </Left>

      <Right>
        <Summary>{props.card.summary}</Summary>
      </Right>
        

    </CardBody>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string,
    summary: PropTypes.string,
  }),
  'get key': PropTypes.func
}

export default Card;

const CardBody = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80%;
`;

const Right = styled.div`
width:40%;
`;

const Left = styled.div`
width:40%;
`;

const Artist = styled.div`

`;

const Album = styled.div`

`;

const Summary = styled.p`

`;

const ImgContainer = styled.div`


 
`;

const Img = styled.img`

`;

const Title = styled.h1`
  
`;