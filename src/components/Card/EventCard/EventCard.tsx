import React from "react";
import Card from "react-bootstrap/Card";
import { EventsInterface } from "../../../pages/home/Events";

const CardWrapper: React.FC<EventsInterface> = ({
  title,
  eventAdress,
  eventDate,
  publishedDate,
  text
}) => {
  return (
    <>
      <Card style={{ textAlign: "center", width: "100%" }}>
        <Card.Body>
          <Card.Title>BPK vs. {title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{new Date(eventDate).toLocaleDateString()}</Card.Text>
          <Card.Link href={eventAdress}>{text}</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardWrapper;
