import { useContext } from "react";
import { Card, Spinner } from "react-bootstrap";
import MoviesContext from "../../store/MoviesContext";
import imageUrl from "../../services/imageUrl";

export default function MovieCard({ item, isLoading }) {
  const notFoundImg = `https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png`
  const { setModalObj, setShow } = useContext(MoviesContext);
  const srcImg = item.poster_path ? imageUrl(item.poster_path) : notFoundImg;
  const title = item.title
    ? item.title.substring(0, 18)
    : "Title Not Available!";
  const year = item.release_date
    ? " " + new Date(item.release_date).getFullYear()
    : "";
  return (
    <>
      {!isLoading ? (
        <Card
          className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer w-60"
          onClick={() => {
            setShow(true);
            setModalObj(item);
          }}
        >
          <Card.Img variant="top" src={srcImg} alt="Poster" />
          <Card.Body>
            <Card.Title>{title + year}</Card.Title>
          </Card.Body>
        </Card>
      ) : (
        <Spinner />
      )}
    </>
  );
}
