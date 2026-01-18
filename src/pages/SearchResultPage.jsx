import React from 'react'
import ListCard from '../components/ListCard'
import useFetchData from '../hooks/useFetchData'
import { useLocation, useSearchParams } from 'react-router'

export default function SearchResultPage() {
    const [searchParams, setSearchParamsn] = useSearchParams();
    const { data } = useFetchData(`search/collection`, 1, searchParams.get('query'))

    console.warn(searchParams.get('query'));

    console.log(data);

  return (
    <>
      <ListCard items={data.results}/>
    </>
  )
}
