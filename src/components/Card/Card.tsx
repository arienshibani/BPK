import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { VolunteersInterface } from "../../pages/om-oss/Volunteers";

const StyledCard = styled(Card)`
  text-align: center;
`;

const StyledCardImage = styled(Card.Img)`
  max-width: 100%;
  margin: 0 auto;
`;

const CardWrapper: React.FC<VolunteersInterface> = ({
  name,
  picture,
  about,
  department
}) => {
  return (
    <>
      <StyledCard>
        <StyledCardImage variant="top" src={picture} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> {department} </Card.Text>
          <Card.Subtitle>{about}</Card.Subtitle>
        </Card.Body>
      </StyledCard>
    </>
  );
};

export default CardWrapper;
