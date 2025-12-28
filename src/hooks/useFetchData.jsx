import React, { useContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

export default function useFetchData(url, page, searchInput) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getDataFromApi(url) {
    setIsLoading(true);
    try {
      const res = await apiClient(url, page, searchInput);
      const json = await res.json();
      setData(json);
      localStorage.setItem("page", page);
    } catch (error) {
      console.log("Error: Not getting data from api", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (searchInput) {
      const timeupId = setTimeout(() => {
        getDataFromApi(url);
      }, 2000);

      return () => {
        clearTimeout(timeupId);
      };
    } else {
      getDataFromApi(url);
    }
  }, [page, url, searchInput]);

  return { data, getDataFromApi, isLoading };
}
