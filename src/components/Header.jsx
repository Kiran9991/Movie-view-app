import React from "react";
import { Link } from "react-router";

function Navlink({ children, to }) {
  return (
    <Link
      to={to}
      className="text-white p-2 whitespace-nowrap hover:bg-gray-700 transition-all duration-300 rounded-md"
      style={{
        textDecoration: "none"
      }}
    >
      {children}
    </Link>
  );
}


export default function Header() {
  return (
    <nav className="bg-black w-full h-14 flex justify-around items-center">
      <div className="flex w-1/2 gap-2 items-center h-full">
        <Navlink to="/home">Home</Navlink>
        <Navlink to="/movie">Movies</Navlink>
        <Navlink to="/tv-shows">Tv-Shows</Navlink>
        <Navlink to="/about-us">About Us</Navlink>
        <Navlink to="/sign-in">Sign in</Navlink>
      </div>
      <div>
        <input type="text" />
      </div>
    </nav>
  );
}
