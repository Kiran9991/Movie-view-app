import { useContext } from "react";
import imageUrl from "../../services/imageUrl";
import MoviesContext from "../../store/MoviesContext";
import { Card, Spinner } from "react-bootstrap";

export default function Cards({ item, isLoading }) {
  const { setShow, setModalContent } = useContext(MoviesContext);
  const notFoundImg = `https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png`;
  const srcImg = item.poster_path ? imageUrl(item.poster_path) : notFoundImg;
  const title = item.title ? item.title.substring(0, 18) : item.name;
  const year = item.release_date ? new Date(item.release_date).getFullYear() : new Date(item.first_air_date).getFullYear();

  return (
    <>
      {!isLoading ? (
        <Card
          className="transition-all duration-300 
          hover:-translate-y-2 hover:shadow-xl 
          cursor-pointer w-60"
          onClick={() => {
            setShow(true);
            setModalContent(item);
          }}
        >
          <Card.Img variant="top" src={srcImg} alt="Poster" />
          <Card.Body>
            <Card.Title>{title+" "+year}</Card.Title>
          </Card.Body>
        </Card>
      ) : (
        <Spinner />
      )}
    </>
  );
}
