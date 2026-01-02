import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import useFetchData from "../hooks/useFetchData";
import List from "../components/Movies/List";
import { Container, Button } from "react-bootstrap";
import PaginationControl from "../components/Movies/PaginationControl";
import imageUrl from "../services/imageUrl";

export default function HomePage() {
  const { data, getDataApi } = useFetchData("trending/movie/day");
  const arr = new Array(10).fill().map((_, i) => i + 1);

  return (
    <>
      <div className="bg-gray-100 h-[15rem] my-3 whitespace-nowrap overflow-x-auto scrollbar-hide">
        {data.results &&
          data.results.map((item, idx) => (
            <div
              className=" w-[9rem] bg-blue-600 h-[80%] m-[10px] inline-block rounded-md"
              key={idx}
            >
              <img
                src={imageUrl(item.poster_path)}
                alt="image"
                height="14rem"
                width="100%"
                className="rounded-lg "
              />
            </div>
          ))}
      </div>
      <Container className="my-3">
        <List items={data.results} />
        <PaginationControl />
      </Container>
    </>
  );
}
