import { useContext } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import imageUrl from "../../services/imageUrl";
import MoviesContext from "../../store/MoviesContext";

export default function MovieModal() {
  const { modalObj, show, setShow, isLoading } = useContext(MoviesContext);

  const date = new Date(modalObj.release_date);
  const titleDate = `${modalObj.title} (${date.getFullYear()})`;

  const modalContent = (
    <div>
      <h7>Rating: {modalObj.vote_average}/10</h7>
      <br />
      <h7>No. of votes: {modalObj.vote_count}</h7>
      <br />
      <h7>
        Release date: {date.getDate()}{" "}
        {date.toLocaleString("en-US", { month: "short" })} {date.getFullYear()}
      </h7>{" "}
      <br />
      <h7>Overview: </h7> <p>{modalObj.overview}</p>
    </div>
  );

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <h5>{titleDate}</h5>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            justifyItems: "space-around",
          }}
        >
          <div style={{ width: "50%" }}>
            {!isLoading ? <img
              height="100%"
              width="100%"
              src={imageUrl(modalObj.backdrop_path)}
              alt="Poster"
            /> : <Spinner/>}
          </div>
          <div style={{ width: "50%", margin: "10px" }}>{modalContent}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShow(false)} className="w-2/6">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
