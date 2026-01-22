import { useState } from "react";
import styles from "./MainNavbar.module.css";
import { SearchIcon, MenuIcon, XIcon, FilmIcon } from "../../assets/Icons";
import { Link, useLocation, useNavigate } from "react-router";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movie" },
    { name: "TV Shows", href: "/tv-shows" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchInput}`)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navInner}>
          {/* Brand */}
          <div className={styles.brand}>
            <FilmIcon className={styles.brandIcon} />
            <span className={styles.brandText}>CINEVERSE</span>
          </div>

          {/* Desktop */}
          <div className={styles.desktopNav}>
            <div className={styles.navLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`${styles.navLink} ${
                    pathname == link.href && styles.active
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className={styles.searchWrapper}>
              <div className={styles.searchIconWrapper}>
                <SearchIcon className={styles.searchIcon} />
              </div>
              <form onSubmit={submitHandler}>
              <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className={styles.searchInput} placeholder="Search..."/>
              </form>
            </div>

            <button className={styles.signInBtn}>Sign In</button>
          </div>

          {/* Mobile */}
          <div className={styles.mobileToggle}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuButton}
            >
              {isMenuOpen ? (
                <XIcon className={styles.mobileMenuIcon} />
              ) : (
                <MenuIcon className={styles.mobileMenuIcon} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`${styles.mobileLink} ${
                pathname == link.href && styles.active
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className={styles.mobileSearch}>
            <div className={styles.mobileSearchIconWrapper}>
              <SearchIcon className={styles.searchIcon} />
            </div>
            <input
              className={styles.mobileInput}
              placeholder="Search titles..."
            />
          </div>

          <div className={styles.mobileSignIn}>
            <button className={styles.signInBtn}>Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
