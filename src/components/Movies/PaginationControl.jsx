import React, { useContext } from "react";
import MoviesContext from "../../store/MoviesContext";
import { Stack, Pagination } from "react-bootstrap";

export default function PaginationControl({ totalResults }) {
  const {
    page,
    pageLimit,
    setNextPage,
    setPrevPage,
    setFirstPage,
    setLastPage,
  } = useContext(MoviesContext);

  return (
    <Stack direction="horizontal" gap={3}>
      <Pagination className="p-2 ms-auto">
        <Pagination.First onClick={() => setFirstPage()} />
        <Pagination.Prev onClick={() => setPrevPage()} />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next onClick={() => setNextPage()} />
        <Pagination.Last onClick={() => setLastPage()} />
      </Pagination>

      <div>Total Pages:- {pageLimit}</div>
      <div>Total Results:- {totalResults}</div>
    </Stack>
  );
}
