import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/images";
import "./Footer.component.scss";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-main">
      <div className="footer-links-section">
        <div className="footer-logo-section">
          <Logo />
          <p>Noči brez limita</p>
        </div>
        <div className="footer-condition-seciton">
          <h5>Pogoji</h5>
          <p
            onClick={() => {
              navigate("/terms-and-conditions");
            }}
          >
            Pogoji uporabe{" "}
          </p>
          <p
            onClick={() => {
              navigate("/privacy-policy");
            }}
          >
            Politika zasebnosti
          </p>
        </div>
        <div className="footer-contact">
          <h5>Kontakt</h5>
          <a href="mailto:info@dijaskizuri.si">email:info@dijaskizuri.si</a>
          <a href="tel:+386 51 624 562">tel:+386 51 624 562 </a>
        </div>
      </div>
      <div className="fotter-bottom">
        <p>Copyright @ 2023 Dijaški žuri Ljubljana</p>
      </div>
    </footer>
  );
};

export default Footer;
