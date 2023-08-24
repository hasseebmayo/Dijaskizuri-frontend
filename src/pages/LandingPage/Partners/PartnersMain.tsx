import partner from "../../../assets/images/Partner.png";
import "./partner.pages.scss";
const PartnersMain = () => {
  return (
    <div className="partner-section">
      <div className="partner-title">
        <h2>Naši Sponzorji/Partnerji</h2>
      </div>

      <img src={partner} alt="Partner 01" />
    </div>
  );
};

export default PartnersMain;
