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

  return (
    <>
    <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            {modalObj.title}
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <img
                height="400px"
                width="550px"
                 src={imageUrl(modalObj.backdrop_path)}
                  alt="Poster" />
              </div>
              <div>
                details
              </div>
            </div>
          </Modal.Body>
          <Button>Close</Button>
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
