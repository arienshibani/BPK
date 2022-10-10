import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { VolunteersInterface } from "../../pages/om-oss/Volunteers";

const StyledCard = styled(Card)`
  text-align: center;
`;

const StyledCardImage = styled(Card.Img)`
  margin: 0 auto;
  height: 15em;
  width: 20em;
  object-fit: cover;
`;

const CardWrapper: React.FC<VolunteersInterface> = ({
  name,
  picture,
  about,

}) => {
  return (
    <>
      <StyledCard>
        <StyledCardImage variant="top" src={picture} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{about}</Card.Subtitle>
        </Card.Body>
      </StyledCard>
    </>
  );
};

export default CardWrapper;
