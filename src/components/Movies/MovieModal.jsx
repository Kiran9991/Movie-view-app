import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import imageUrl from "../../services/imageUrl";
import MoviesContext from "../../store/MoviesContext";

export default function MovieModal() {
  const { modalContent, show, setShow } = useContext(MoviesContext);

  const title = modalContent.title ? modalContent.title : modalContent.name;
  const date = modalContent.release_date ? new Date(modalContent.release_date) : new Date(modalContent.first_air_date);

  const modalContentObj = (
    <div>
      <h7>Rating: {modalContent.vote_average}/10</h7>
      <br />
      <h7>No. of votes: {modalContent.vote_count}</h7>
      <br />
      <h7>
        Release date: {date.getDate()}{" "}
        {date.toLocaleString("en-US", { month: "short" })} {date.getFullYear()}
      </h7>{" "}
      <br />
      <h7>Overview: </h7> <p>{modalContent.overview}</p>
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
        <h5>{title}</h5>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            justifyItems: "space-around",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              height="100%"
              width="100%"
              src={imageUrl(modalContent.backdrop_path)}
              alt="Poster"
            />
          </div>
          <div style={{ width: "50%", margin: "10px" }}>{modalContentObj}</div>
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
