import "./menubar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const Menubar = ({ active, setBurgerActive }) => {
  const closeBurgerHandler = () => {
    setBurgerActive(!active);
  };

  return (
    <aside className={`${active ? "menubar menu-active" : "menubar"}`}>
      <CloseIcon className="close-icon" onClick={closeBurgerHandler} />
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
          <ul className="submenu">
            <li>
              <a href="#">Submemu-1</a>
            </li>
            <li>
              <a href="#">Submemu-2</a>
            </li>
          </ul>
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
    </aside>
  );
};

export default Menubar;
