import { ReactNode } from "react";

import "./cardinfo.component.scss";
type propsCard = {
  icon: ReactNode;
  heading: string;
  content: string;
};
const CardInfo = ({ content, heading, icon }: propsCard) => {
  return (
    <div className="card-info-main">
      <div className="card-icon">{icon}</div>
      <div className="card-line"></div>
      <div className="card-content">
        <h5>{heading}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardInfo;
