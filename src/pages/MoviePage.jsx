import PaginationControl from "../components/Movies/PaginationControl";
import { useContext } from "react";
import MoviesContext from "../store/MoviesContext";
import useFetchData from "../hooks/useFetchData";
import ListCard from "../components/ListCard";

export default function MoviePage() {
  const { moviesData, isLoading, totalResults, category, page } = useContext(MoviesContext);
  const { data } = useFetchData(`movie/${category}`, page);

  return (
    <>
      <ListCard items={data.results}/>
      <PaginationControl totalResults={totalResults} />
    </>
  );
}
