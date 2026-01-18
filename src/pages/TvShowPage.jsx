import { useContext } from "react";
import ListCard from "../components/ListCard";
import PaginationControl from "../components/Movies/PaginationControl";
import TvShowsConstext from "../store/TvShowsContext";

export default function TvShowPage() {
  const { tvShowsData, isLoading, totalResults } = useContext(TvShowsConstext);

  return (
    <>
      <ListCard items={tvShowsData}/>
      <PaginationControl totalResults={totalResults} />
    </>
  );
}
