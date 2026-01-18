import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import style from "./Header.module.css";

function Navlink({ children, to }) {
  return (
    <Link to={to} className={style.navLinkText}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [show, setIsShow] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsShow(false);
  }, [pathname]);

  const toggleBtnHandler = () => setIsShow(!show);

  const submitBtnHandler = (e) => {
    e.preventDefault();
    // alert(searchInput);
    searchInput ? setSearchParams({ query:searchInput }) : setSearchParams({});
    setSearchInput('')
  }

  return (
    <nav className={style.navContainer}>
      <div className={show ? style.navLinkContainer : style.hideNavBar}>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/movie">Movies</Navlink>
        <Navlink to="/tv-shows">Tv-Shows</Navlink>
        <Navlink to="/about-us">About Us</Navlink>
        <Navlink to="/sign-in">Sign in</Navlink>
      </div>
      <div className={style.navSearchEngine}>
        <form onSubmit={submitBtnHandler}>
          <input value={searchInput} type="text" placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)} />
        </form>
      </div>
      <div className={style.toggle} onClick={toggleBtnHandler}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>
    </nav>
  );
}
