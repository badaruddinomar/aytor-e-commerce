import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import footerLogo from "../../../images/footer-logo.png";
import payByCard from "../../../images/card-image.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { accountLinks, openingTimeData, supportLinks } from "../../../data";

const DarkFooter = () => {
  return (
    <footer>
      <div className="dark-footer-section">
        {/* footer top-- */}
        <div className="footer-top">
          <div className="social-links">
            <a href="#">
              <FacebookIcon className="icon" />
            </a>
            <a href="#">
              <TwitterIcon className="icon" />
            </a>
            <a href="#">
              <InstagramIcon className="icon" />
            </a>
            <a href="#">
              <PinterestIcon className="icon" />
            </a>
          </div>
          <div>
            <img src={footerLogo} alt="footer-logo" />
          </div>
          <div>
            <img src={payByCard} alt="payByCard" />
          </div>
        </div>
        {/* footer middle */}
        <div className="footer-middle">
          {/* div-01 */}
          <div className="account">
            <h4>My Account</h4>
            {accountLinks.map((link, ind) => {
              return (
                <div key={ind} className="links">
                  <a href="#">
                    <ChevronRightIcon className="icon" />{" "}
                    <span>{link.title}</span>
                  </a>
                </div>
              );
            })}
          </div>
          {/* div-02 */}
          <div className="support">
            <h4>Support</h4>
            {supportLinks.map((link, ind) => {
              return (
                <div key={ind} className="links">
                  <a href="#">
                    <ChevronRightIcon className="icon" />{" "}
                    <span>{link.title}</span>
                  </a>
                </div>
              );
            })}
          </div>
          {/* div-03 */}
          <div className="opening-time">
            <h4>Opening Time</h4>
            {openingTimeData.map((data, ind) => {
              return (
                <div key={ind} className="time-div">
                  <span className="day">{data.day}: </span>
                  <span className="time">{data.time}</span>
                </div>
              );
            })}
          </div>
          {/* div-04 */}
          <div className="contact">
            <h4>Contact Us</h4>
            <address>
              <PlaceIcon className="icon" />
              <span>
                830 Broad way, New York, NY 10003,
                <br /> United States
              </span>
            </address>
            <a href="tel:+18008660286" className="phone">
              <LocalPhoneIcon className="icon" />
              <span>+18008660286</span>
            </a>
            <div className="mails">
              <MailIcon className="icon" />
              <div>
                <a href="mailto:aetor.info@gmail.com">aetor.info@gmail.com</a>
                <a href="mailto:info@aetor.com">info@aetor.com</a>
              </div>
            </div>
          </div>
          {/* div-05 */}
          <div className="news">
            <h4>News Letter</h4>
            <p>
              Authoritatively morph 24/7 potentialities <br /> with error-free
              partnerships.
            </p>
            <form className="subscribe-form">
              <input type="text" placeholder="Enter your mail..." />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          © 2022 All Rights Reserved <span>Aytor</span> By
          <span> Badar Uddin Omar </span>
        </p>
      </div>
    </footer>
  );
};

export default DarkFooter;
