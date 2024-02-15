import "./topbar.scss";
import paperPlaneIcon from "../../images/paper-plane-icon.svg";
const TopBar = () => {
  return (
    <header className="topbar">
        {/* left-div */}
      <div className="left-div">
        <img src={paperPlaneIcon} alt="paper-plane-icon" />
        <p>
          FREE SHIPING world wide for all orders over <span>$150</span>
        </p>
      </div>
      <div className="right-div">
        

      </div>
    </header>
  );
};

export default TopBar;
