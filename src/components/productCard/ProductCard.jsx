/* eslint-disable react/prop-types */
import "./productCard.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Tooltip from "@mui/material/Tooltip";
const ProductCard = ({ image, price, title, discount }) => {
  return (
    <div className="product-card">
      <img src={image} alt="arrivales01" />
      <p className="price">{price}</p>
      <p className="title">{title}</p>
      <div className="star-icons-div">
        <StarIcon className="icon" />
        <StarIcon className="icon" />
        <StarIcon className="icon" />
        <StarIcon className="icon" />
        <StarIcon className="icon" />
      </div>
      <div className="icons">
        <Tooltip
          className="tooltip"
          title={
            <h2
              style={{
                fontSize: "12px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Add To Cart
            </h2>
          }
          placement="left-start"
        >
          <AddShoppingCartIcon className="icon" />
        </Tooltip>
        <Tooltip
          placement="left-start"
          title={
            <h2
              style={{
                fontSize: "12px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Add To Wishlist
            </h2>
          }
        >
          <FavoriteIcon className="icon" />
        </Tooltip>
        <Tooltip
          title={
            <h2
              style={{
                fontSize: "12px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
              fontFamily={("Josefin Sans", "sans-serif")}
            >
              Watch
            </h2>
          }
          placement="left-start"
        >
          <RemoveRedEyeIcon className="icon" />
        </Tooltip>
        <Tooltip
          title={
            <h2
              style={{
                fontSize: "12px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Chart
            </h2>
          }
          placement="left-start"
        >
          <SignalCellularAltIcon className="icon" />
        </Tooltip>
      </div>
      <div className="discount">
        <p>{discount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
