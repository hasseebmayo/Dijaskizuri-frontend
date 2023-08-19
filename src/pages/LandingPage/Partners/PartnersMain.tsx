import { Partner1, Partner2, Partner3, Partner4 } from "../../../assets/images";
import "./partner.pages.scss";
const PartnersMain = () => {
  return (
    <div className="partner-section">
      <div className="partner-title">
        <h2>Naši Sponzorji/Partnerji</h2>
      </div>

      <Partner3 />
      <Partner2 />
      <Partner1 />
      <Partner4 />
    </div>
  );
};

export default PartnersMain;
