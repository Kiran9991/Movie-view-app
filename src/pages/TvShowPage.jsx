import ListCard from "../components/ListCard";
import useFetchData from "../hooks/useFetchData";

export default function TvShowPage() {
  const { data } = useFetchData('discover/tv')

  return (
    <>
      <ListCard items={data.results} title="Tv Shows" />
    </>
  );
}
