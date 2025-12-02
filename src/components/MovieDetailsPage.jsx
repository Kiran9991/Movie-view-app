import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import MoviesContext from "../store/MoviesContext";

export default function MovieDetailsPage() {
  const { moviesData } = useContext(MoviesContext);

  return (
    <>
    <Container className="my-3">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4" >
        {moviesData &&
          moviesData.map((item, idx, arr) => (
            <Col
            key={item.id}
            >
            <Card
              style={{
                width: "15rem",
              }}
            >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500
${item.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{item.title.substring(0,18)}</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          ))}
      </Row>
      </Container>
    </>
  );
}
