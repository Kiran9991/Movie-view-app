import { useContext, useCallback } from "react";
import imageUrl from "../../services/imageUrl";
import MoviesContext from "../../store/MoviesContext";
import { Card, Spinner } from "react-bootstrap";

const NOT_FOUND_IMG = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png";

export default function Cards({ item, isLoading }) {
  const { setShow, setModalContent } = useContext(MoviesContext);

  if (isLoading) {
    return <Spinner />;
  }

  const {
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
  } = item;

  const srcImg = poster_path ? imageUrl(poster_path) : NOT_FOUND_IMG;
  const displayTitle = (title || name || "").substring(0, 18);
  const year = release_date || first_air_date
    ? new Date(release_date || first_air_date).getFullYear()
    : "";

  const handleClick = useCallback(() => {
    setShow(true);
    setModalContent(item);
  }, [setShow, setModalContent, item]);

  return (
    <Card
      className="transition-all duration-300 
        hover:-translate-y-2 hover:shadow-xl 
        cursor-pointer w-[200px]"
      onClick={handleClick}
    >
      <Card.Img height={100} variant="top" src={srcImg} alt="Poster" />
      <Card.Body>
        <Card.Title>
          {displayTitle} {year}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
