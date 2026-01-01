import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import useFetchData from "../hooks/useFetchData";
import List from "../components/Movies/List";
import { Container, Button } from "react-bootstrap";
import PaginationControl from "../components/Movies/PaginationControl";

export default function HomePage() {
  const { data, getDataApi } = useFetchData("trending/movie/day");
    const arr = new Array(10).fill().map((_,i) => i+1);

  return (
    <>
    <div
    className="bg-red-50
    h-[12rem] my-3 whitespace-nowrap
    overflow-x-auto scrollbar-hide
    "
    >
    {
        arr.map((item, idx) => (
<div
    className="
    h-10/12 w-[15rem] bg-blue-600
    m-[10px] inline-block
    "
    key={idx}
    >
{item}
    </div>
        ))
    }
    

    </div>
      <Container className="my-3">
        <List items={data.results} />
        <PaginationControl/>
      </Container>
    </>
  );
}
