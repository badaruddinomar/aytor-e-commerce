// import BestProducts from "./BestProducts";
// import Deals from "./Deals";
// import NewArrivales from "./NewArrivales";
// import SpecialOffer from "./SpecialOffer";
// import Discount from "./discount";

import "./homePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import SupportIcon from "@mui/icons-material/Support";
import feartureImg01 from "./../../images/home-feature-01.png";
import feartureImg02 from "./../../images/home-feature-02.png";
import feartureImg03 from "./../../images/home-feature-03.png";
import {
  newArriableData,
  dealsData,
  bestProductsData,
  latestNewsData,
} from "../../data";
import ProductCard from "../../components/productCard/ProductCard";
import specialOfferImage from "../../images/specialOffer.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DarkFooter from "../../components/footer/darkFooter/DarkFooter";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    focusOnSelect: false,
  };
  return (
    <div className="home-page">
      {/* SECTION-01: home banner starts from here-- */}
      <div className="home-banner">
        <Slider {...sliderSettings} className="slider">
          <div className="slide">
            <div className="content">
              <h6>Mega Sale</h6>
              <h1>Up To 35% Off</h1>
              <p>
                Objectively incubate enabled innovation through leveraged <br />
                mindshare. Competently.
              </p>
              <div className="banner-btn-div">
                <a className="banner-btn" href="#">
                  Shop Now <ArrowRightAltIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h6>Mega Sale</h6>
              <h1>Up To 35% Off</h1>
              <p>
                Objectively incubate enabled innovation through leveraged <br />
                mindshare. Competently.
              </p>
              <div className="banner-btn-div">
                <a className="banner-btn" href="#">
                  Shop Now <ArrowRightAltIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              <h6>Mega Sale</h6>
              <h1>Up To 35% Off</h1>
              <p>
                Objectively incubate enabled innovation through leveraged <br />
                mindshare. Competently.
              </p>
              <div className="banner-btn-div">
                <a className="banner-btn" href="#">
                  Shop Now <ArrowRightAltIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* SECTION-2: featured products section starts from here-- */}
      <div className="home-feature">
        <div className="home-feature-container">
          <div className="left-div">
            <div className="img-div">
              <img
                className="feature-img"
                src={feartureImg01}
                alt="feature-image-01"
              />
              <div className="content">
                <h3>Beauty Cream</h3>
                <a href="#">
                  Shop Now <ArrowRightAltIcon className="icon" />
                </a>
              </div>
            </div>
            <div className="img-div">
              <img
                className="feature-img"
                src={feartureImg02}
                alt="feature-image-02"
              />
              <div className="content">
                <h3>Beauty Cream</h3>
                <a href="#">
                  Shop Now <ArrowRightAltIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="right-div">
            <div className="img-div">
              <img
                className="feature-img"
                src={feartureImg03}
                alt="feature-image-03"
              />
              <div className="content">
                <h3>Beauty Cream</h3>
                <a href="#">
                  Shop Now <ArrowRightAltIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION-3: new arriavles sections start from here-- */}
      <div className="new-arrivales">
        <div className="container">
          <h2>New Arrivals Products</h2>

          <div className="slider">
            {newArriableData.map((data, ind) => {
              return (
                <ProductCard
                  key={ind}
                  image={data.image}
                  price={data.price}
                  discount={data.discount}
                  title={data.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* SECTION-4: discount sections start from here-- */}
      <div className="discount-section">
        <h2>
          Get Up To 35% Off all <br /> Best Spa Cosmetics <br /> Cream
        </h2>
        <p>
          Holisticly maximize interoperable action items for effective <br />
          e-business. Globally impact enterprise-wide niche markets <br />{" "}
          through dynamic.
        </p>
        <button type="button">
          <span>Shop Now</span> <ArrowRightAltIcon className="icon" />
        </button>
      </div>
      {/* SECTION-5: best product section starts from here-- */}
      <div className="best-product-section">
        <h2>Best Seller Products</h2>

        <div className="container">
          {bestProductsData.map((product, ind) => {
            return (
              <ProductCard
                key={ind}
                price={product.price}
                title={product.title}
                discount={product.discount}
                image={product.image}
              />
            );
          })}
        </div>
        <button type="button">
          <span>See All Products </span>
          <ArrowRightAltIcon className="icon" />
        </button>
      </div>
      {/* SECTION-6: deals section starts from here-- */}
      <div className="deals-section">
        <h2>Deals of the Days</h2>
        <div className="container">
          <div className="slider">
            {dealsData.map((data, ind) => {
              return (
                <div
                  style={{ backgroundImage: `url(${data.image})` }}
                  className="slide"
                  key={ind}
                >
                  <p className="para1">{data.para1}</p>
                  <h3>{data.para2}</h3>
                  <p className="para2">{data.para3}</p>
                  <p className="price">
                    <span>{data.newPrice}</span>
                    <span className="old-price">{data.oldPrice}</span>
                  </p>
                  <button>
                    <span>Shop Now</span>
                    <ArrowRightAltIcon className="icon" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="count-down-timer">
            <p>
              <span>27</span> <span className="text">Days</span>
            </p>
            <span className="colon">:</span>
            <p>
              <span>16</span> <span className="text">Hour</span>
            </p>
            <span className="colon">:</span>
            <p>
              <span>13</span> <span className="text">Minute</span>
            </p>
            <span className="colon">:</span>
            <p>
              <span>27</span> <span className="text">sec</span>
            </p>
          </div>
        </div>
      </div>
      {/* SECTION-7: special offer section starts from here-- */}
      <div className="special-offer-section">
        <div className="left-div">
          <p className="para-1">SPECIAL OFFER</p>
          <h3>
            Beauty Inspired by Real <br /> Shine In Life{" "}
          </h3>
          <p className="para-2">
            Completely grow maintainable niches via tactical services. <br />
            Progressively synthesize market positioning paradigms for <br />{" "}
            functional architectures. Professionally aggregate.
          </p>
          <button>
            <span>Explore More</span>
            <ArrowRightAltIcon className="icon" />
          </button>
        </div>
        <div className="right-div">
          <img src={specialOfferImage} alt="special-offer-image" />
          <PlayArrowIcon className="icon" />
        </div>
      </div>
      {/* SECTION-8: latest news section starts from here-- */}
      <div className="latest-news-section">
        <h3>Latest News</h3>
        <div className="blog-card-container">
          {latestNewsData.map((newsData, ind) => {
            return (
              <div className="blog-card" key={ind}>
                <div className="blog-card-img">
                  <img src={newsData.image} alt="blog-image" />
                </div>
                <div className="blog-card-content">
                  <h4>{newsData.header}</h4>
                  <p className="desc">{newsData.summery}</p>
                  <div className="card-footer">
                    <a href="#" className="link">
                      <span>Read More </span>
                      <ArrowRightAltIcon className="icon" />
                    </a>
                    <p className="date">{newsData.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* SECTION-9: featurs */}
      <div className="features-section">
        <div className="container">
          <div className="feature">
            <LocalShippingIcon className="icon" />
            <div className="desc">
              <h4>FREE SHIPING</h4>
              <p>all orders over $150</p>
            </div>
          </div>
          <div className="border"></div>
          <div className="feature">
            <CreditCardIcon className="icon" />
            <div className="desc">
              <h4>QUICK PAYMENT</h4>
              <p>100% secure payment</p>
            </div>
          </div>
          <div className="border"></div>
          <div className="feature">
            <AssignmentReturnIcon className="icon" />
            <div className="desc">
              <h4>FREE RETURNS</h4>
              <p>Return money within 30 days</p>
            </div>
          </div>
          <div className="border"></div>
          <div className="feature">
            <SupportIcon className="icon" />
            <div className="desc">
              <h4>24/7 SUPPORT</h4>
              <p>Quick Support</p>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION-FOOTER: footer section */}
      <DarkFooter />
    </div>
  );
};

export default HomePage;
