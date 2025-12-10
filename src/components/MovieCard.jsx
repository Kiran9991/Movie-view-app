import React, { useContext } from "react";
import { Card, Spinner, Modal, Button } from "react-bootstrap";
import MoviesContext from "../store/MoviesContext";
import imageUrl from "../services/imageUrl";
import notFoundImg from '../assets/not_found.jpg';

export default function MovieCard({ item }) {
  const { isLoading, setModalObj, setShow } = useContext(MoviesContext);
  const srcImg = item.poster_path ? imageUrl(item.poster_path) : notFoundImg;
    const title = item.title ? item.title.substring(0, 18)
                : 'Title Not Available!';
    const year = item.release_date ? " "+new Date(item.release_date).getFullYear() : '';
  return (
    <>
    
      {!isLoading ? (
        <Card
        className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer w-60"
        onClick={() => {setShow(true); setModalObj(item)}}
        >
          <Card.Img
            variant="top"
            src={srcImg}
            alr="Poster"
          />
          <Card.Body>
            <Card.Title>{title+year}</Card.Title>
          </Card.Body>
        </Card>
      ) : (
        <Spinner />
      )}
    </>
  );
}
