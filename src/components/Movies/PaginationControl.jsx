import React, { useContext } from "react";
import MoviesContext from "../../store/MoviesContext";
import { Stack, Pagination } from "react-bootstrap";

export default function PaginationControl({ totalResults }) {
  const { pageState, dispatch } = useContext(MoviesContext);

  function getPageArr() {
    const { page } = pageState;
    const { pageLimit } = pageState
    const WINDOW_SIZE = 7;
    const WINDOW_ARR = new Array(WINDOW_SIZE).fill().map((_, i) => i+1);
    let n = WINDOW_ARR.length;
    const MID_WINDOW = Math.floor(n/2);

    // For Starting page
    if(page <= MID_WINDOW+1) {
      return WINDOW_ARR.map((_, i) => i+1);
    }     

    // For Ending page
    if(page >= pageLimit - MID_WINDOW) {
      return WINDOW_ARR.map((_, i) => pageLimit - WINDOW_SIZE + 1 + i)
    }

    // For Middle Page
    return WINDOW_ARR.map((_, i) => page - MID_WINDOW + i);
  }

  const pageArr = getPageArr();

  return (
      <Pagination className="p-2 ms-auto justify-center ">
        <Pagination.First onClick={() => dispatch({ type: "FIRST" })} />
        <Pagination.Prev onClick={() => dispatch({ type: "PREV" })} />

        {pageArr.map((item, idx) => (
          <Pagination.Item key={idx} active={item === pageState.page}
          onClick={() => dispatch({ type: 'SETPAGE', pageNo: item })}
          >
            {item}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={() => dispatch({ type: "NEXT" })} />
        <Pagination.Last onClick={() => dispatch({ type: "LAST" })} />
      </Pagination>
  );
}
