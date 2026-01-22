import React, { useContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

export default function useFetchData(url, options = {}) {
  const { page = 1 } = options;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getDataFromApi() {
    setIsLoading(true);
    try {
      const res = await apiClient(url, options );
      const json = await res.json();
      setData(json);
      localStorage.setItem("page", page);
    } catch (error) {
      console.log("Error: Not getting data from api", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getDataFromApi();
    console.log('renders', options['sortBy'])
  }, [url, page, JSON.stringify(options)]);

  return { data, getDataFromApi, isLoading };
}
