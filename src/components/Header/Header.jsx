import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../Images/b.png";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, selectLang } from "../../store/languageSlice";
import { languageData } from "../../Language/language";
import amFlag from "../../Images/am.png"
import enFlag from "../../Images/en.png"


const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const dispatch = useDispatch();
  const { language } = useSelector(selectLang);

  const { header } = languageData[language];

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
      <Link to="/portfoilo" className="logo">
        <img src={logo} alt="" />
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
        <NavLink
          className="navItem"
          to="/portfoilo/about"
          onClick={() => setBurgerMenu(false)}
        >
          {header?.resume}
        </NavLink>
        <NavLink
          className="navItem"
          to="/portfoilo/skills"
          onClick={() => setBurgerMenu(false)}
        >
          {header?.skills}
        </NavLink>
        <NavLink
          className="navItem"
          to="/portfoilo/contact"
          onClick={() => setBurgerMenu(false)}
        >
          {header?.contact}
        </NavLink>

        <div className="switchLang">
          {language !== "en" ? (
            <button
              className="lang"
              onClick={() => {
                dispatch(changeLanguage("en"));
                setBurgerMenu(false);
              }}
            >
              <img src={enFlag} alt="" />
              <span>Eng</span>
            </button>
          ) : (
            <button
              className="lang"
              onClick={() => {
                dispatch(changeLanguage("am"));
                setBurgerMenu(false);
              }}
            >
              <img src={amFlag} alt="" />
              <span>հայ</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
