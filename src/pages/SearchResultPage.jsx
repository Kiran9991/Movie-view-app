import ListCard from '../components/ListCard'
import useFetchData from '../hooks/useFetchData'
import { useLocation, useSearchParams } from 'react-router'
import MovieFilterSidebar from '../components/SideBar';

export default function SearchResultPage() {
    const [searchParams, setSearchParamsn] = useSearchParams();
    const { data } = useFetchData(`search/movie`, { page:1, searchInput: searchParams.get('query') })

  return (  
    <>
      <div style={{ display: 'flex'}}>
      <MovieFilterSidebar/>
      <ListCard items={data.results} title='Searched Results'/>
      </div>
    </>
  )
}
