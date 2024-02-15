import "./navbar.scss";
import logo from "./../../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menubar from "./Menubar";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const burgerHandler = () => {
    setBurgerActive(true);
  };
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="burger" onClick={burgerHandler}>
            <MenuIcon className="icon" />
          </div>

          <div className="logo-div">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="links-div">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
                <ExpandMoreIcon className="icon" />
                <ul className="submenu">
                  <li>
                    <a href="#">Submemu-1</a>
                  </li>
                  <li>
                    <a href="#">Submemu-2</a>
                  </li>
                  <li>
                    <a href="#">Submemu-3</a>
                  </li>
                  <li>
                    <a href="#">Submemu-4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ExpandMoreIcon className="icon" />
              </li>
              <li>
                <a href="#">Features</a>
                <ExpandMoreIcon className="icon" />
              </li>
              <li>
                <a href="#">Blogs</a>
                <ExpandMoreIcon className="icon" />
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="icons-div">
            <SearchIcon className="icon" />
            <PersonOutlineIcon className="icon" />
            <FavoriteBorderIcon className="icon" />
            <LocalMallIcon className="icon" />
          </div>
        </div>
      </nav>
      <Menubar active={burgerActive} setBurgerActive={setBurgerActive} />
    </>
  );
};

export default Navbar;
