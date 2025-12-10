import React, { useContext } from "react";
import { Container, Row, Col, Pagination, Stack, Modal, Button } from "react-bootstrap";
import MoviesContext from "../store/MoviesContext";
import MovieCard from "./MovieCard";
import imageUrl from "../services/imageUrl";

export default function MovieList() {
  const {
    filteredMoviesData,
    page,
    pageLimit,
    totalResults,
    setNextPage,
    setPrevPage,
    setFirstPage,
    setLastPage,
    show,
    setShow,
    modalObj
  } = useContext(MoviesContext);

  console.log('modalObj>>', modalObj)
  const date = new Date(modalObj.release_date)
  const titleDate = `${modalObj.title} (${date.getFullYear()})`


  const modalContent = <div>
    <h7>Rating: {modalObj.vote_average}/10</h7><br/>
    <h7>No. of votes: {modalObj.vote_count}</h7><br/>
    <h7>Release date: {date.getDate()} {date.toLocaleString('en-US', { month: 'short' })} {date.getFullYear()}</h7> <br/>
    <h7>Overview: </h7> <p>{modalObj.overview}</p>
  </div>

  return (
    <>
    <Modal
    size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            <h5>

            {titleDate}
            </h5>
          </Modal.Header>
          <Modal.Body>
            <div style={{
              display:'flex',
              justifyItems:'space-around'
            }}>
              <div
              style={{ width:'50%'}}
              >
                <img
                height="100%"
                width="100%"
                 src={imageUrl(modalObj.backdrop_path)}
                  alt="Poster" />
              </div>
              <div
              style={{ width:'50%', margin:"10px"}}
              >
                {modalContent}
              </div>
            </div>
          </Modal.Body>
          <Button
          className="m-2 w-2/6"
          >Close</Button>
        </Modal>
      <Container className="my-3">
          <Stack direction="horizontal" gap={3} >
            <Pagination className="p-2 ms-auto">
              <Pagination.First onClick={() => setFirstPage()} />
              <Pagination.Prev onClick={() => setPrevPage()} />
              <Pagination.Item active>{page}</Pagination.Item>
              <Pagination.Next onClick={() => setNextPage()} />
              <Pagination.Last onClick={() => setLastPage()} />
            </Pagination>
          
            <div>
              Total Pages:- {pageLimit}
            </div>
            <div>
              Total Results:- {totalResults}
            </div>
           
        </Stack>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredMoviesData &&
            filteredMoviesData.map((item) => (
              <Col key={item.id}>
                <MovieCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
