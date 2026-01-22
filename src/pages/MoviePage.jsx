import useFetchData from "../hooks/useFetchData";
import ListCard from "../components/ListCard";
import { useState } from "react";

export default function MoviePage() {
  const sortOptions = [
    ["Popularity Ascending", "popularity.asc"],
    ["Popularity Descending", "popularity.desc"],

    ["Rating Ascending", "vote_average.asc"],
    ["Rating Descending", "vote_average.desc"],

    ["Release Date Ascending", "release_date.asc"],
    ["Release Date Descending", "release_date.desc"],

    ["Title (A to Z)", "original_title.asc"],
    ["Title (Z to A)", "original_title.desc"],
  ];
  const [option, setOption] = useState(sortOptions[1][1]);
  const { data } = useFetchData(`discover/movie`, { sortBy: option });

  console.log(option);

  return (
    <>
      <div>
        <div>
          <h5>Sort</h5>
          <select onChange={(e) => setOption(e.target.value)}>
            {sortOptions.map((option) => (
              <option key={option} value={option[1]}>
                {option[0]}
              </option>
            ))}
          </select>
        </div>
        <div>Filter</div>
      </div>
      <ListCard items={data.results} title="Movies" />
    </>
  );
}
