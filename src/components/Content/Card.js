import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Card = props => {
  return (
    <CardBody>

      <Left>
        <Title>{props.card.volumeInfo.title}</Title>

        <ImgContainer>
          <Img src={props.card.volumeInfo.imageLinks.small} alt="bookcover" />
        </ImgContainer>

        <AuthorBox>
          <em>********** TODO Allow for multiple authors **********</em>
          
          <Author>{props.card.volumeInfo.authors}</Author>
        </AuthorBox>
      </Left>

      <Right>
        <SumTitle>Summary</SumTitle>
        <Summary>{props.card.volumeInfo.description}</Summary>
        <em>********** TODO Average Rating Component **********</em>
        <div>{props.card.volumeInfo.averageRating}</div>

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

const Button = styled.button`
  
`;

const ImgContainer = styled.div`


 
`;

const Img = styled.img`

`;

