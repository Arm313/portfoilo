import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    if (burgerMenu) {
      document.body.classList.add("body-scroll");
    } else {
      document.body.classList.remove("body-scroll");
    }
  }, [burgerMenu]);
  const toggleMenu = (e) => {
    e.preventDefault();
    setBurgerMenu(!burgerMenu);
  };
  return (
    <header>
      <Link to="/" className="logo">
        ARM
      </Link>

      <div className="burgerMenu" onClick={(e) => toggleMenu(e)}>
        <label className="hamburger">
          <input type="checkbox" checked={burgerMenu} onChange={toggleMenu} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
      <nav className={`${burgerMenu && "burgerActive"}`}>
        <NavLink className="navItem" to="/" onClick={() => setBurgerMenu(false)}>
          Home
        </NavLink>
        <NavLink className="navItem" to="/about" onClick={() => setBurgerMenu(false)}>
          About
        </NavLink>
        <NavLink className="navItem" to="/skills" onClick={() => setBurgerMenu(false)}>
          Skills
        </NavLink>
        <NavLink className="navItem" to="/contact" onClick={() => setBurgerMenu(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
