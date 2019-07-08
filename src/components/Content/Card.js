import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Card = props => {
  return (
    <CardBody>

      <Left>
        <Title>{props.card.title}</Title>

        <ImgContainer>
          <Img src={props.card.img} alt="bookcover" />
        </ImgContainer>

        <AuthorBox>
          <Author>{props.card.author}</Author>
        </AuthorBox>
      </Left>

      <Right>
        <SumTitle>Summary</SumTitle>
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

const Title = styled.h1`
  
`;

const Author = styled.h1`

`;

const AuthorBox = styled.div`

`;

const SumTitle = styled.h1`

`;


const Summary = styled.p`

`;

const ImgContainer = styled.div`


 
`;

const Img = styled.img`

`;

