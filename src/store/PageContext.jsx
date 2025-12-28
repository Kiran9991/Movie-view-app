import { createContext } from "react";


const pageContext = createContext();

export function pageContextProvider({ children }) {
    const [page, setPage] = useState(0);
    const pageLimit = 500;

    const prevPage = () => {
        page > 1 && setPage(page - 1);
    }

    const nextPage = () => {
        page < pageLimit && setPage(page + 1);
    }

    const firstPage = () => {
        
    }
}