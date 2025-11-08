import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black h-12 flex items-center">
      <ul className="w-[30%] flex  text-white justify-around">
        <Link to="/" className="hover:font-bold cursor-pointer">
          Home
        </Link>
        <Link to="/movie" className="hover:font-bold cursor-pointer">
          Movies
        </Link>
        <Link to="/series" className="hover:font-bold cursor-pointer">
          Series
        </Link>
        <Link to="/about" className="hover:font-bold cursor-pointer">
          about
        </Link>
        <Link to="/documentry" className="hover:font-bold cursor-pointer">
          Documentary
        </Link>
      </ul>
      <div>
        <form action=''>
          <input
            placeholder="Search"
            className="text-white m-1"          
          />
        </form>
      </div>
    </nav>
  );
}
