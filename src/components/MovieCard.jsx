import React, { useContext } from "react";
import { Card, Spinner } from "react-bootstrap";
import MoviesContext from "../store/MoviesContext";

export default function MovieCard({ item }) {
  const { isLoading } = useContext(MoviesContext);

  return (
    <>
      {!isLoading ? (
        <Card
          style={{
            width: "15rem",
          }}
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500
${item.poster_path}`}
            alr="Poster"
          />
          <Card.Body>
            <Card.Title>{item.title.substring(0, 18)
               +" "+new Date(item.release_date).getFullYear()}</Card.Title>
          </Card.Body>
        </Card>
      ) : (
        <Spinner />
      )}
    </>
  );
}
