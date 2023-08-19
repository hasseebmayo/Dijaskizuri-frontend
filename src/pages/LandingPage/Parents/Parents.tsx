import { ReactNode } from "react";
import CardInfo from "../../../components/Card/CardInfo";
import "./parents.pages.scss";
import {
  BriefCaseIcon,
  HandShakeIcon,
  HonorIcon,
  ShieldIcon,
  StampIcon,
} from "../../../assets/images";
export type offerProps = {
  icon: ReactNode;
  heading: string;
  content: string;
};
const ParentsSection = () => {
  const offers: offerProps[] = [
    {
      heading: "Profesionalna zanesljivost:",
      content:
        "Smo uveljavljena in registrirana slovenska gospodarska družba, ki stoji za svojim imenom in zagotavlja profesionalnost na vsakem koraku.",
      icon: <StampIcon />,
    },
    {
      content:
        "Ponašamo se z bogatimi izkušnjami v organizaciji dogodkov vseh velikosti, od majhnih do velikih.",
      heading: "Bogate izkušnje:",
      icon: <HonorIcon />,
    },
    {
      content:
        " Naše varnostne ekipe so strokovno usposobljene in delujejo v skladu z najvišjimi standardi ter veljavnimi zakoni.",
      heading: "Vrhunska varnost:",
      icon: <ShieldIcon />,
    },
    {
      content:
        "Na vsakem dogodku kjer je to potrebno zagotavljamo prisotnost usposobljene ekipe za nujno medicinsko pomoč, kar zagotavlja varnost vseh prisotnih.",
      heading: "Medicinska pripravljenost:",
      icon: <BriefCaseIcon />,
    },
    {
      content:
        "Zavezuje nas sodelovanje z uglednimi organizacijami, kot je Drogart, kar dodatno krepi našo zavezanost kakovosti in varnosti.",
      heading: "Partnerstva:",
      icon: <HandShakeIcon />,
    },
  ];
  return (
    <div className="parent-main-container" id="parents">
      <div className="parent-heading">
        <h5>Za starše</h5>
        <p>
          Naša predanost varnosti, profesionalnosti in komunikaciji je ključnega
          pomena. Kot zanesljiva organizacija smo v tesnem stiku z zakonskimi
          zahtevami, pri čemer zagotavljamo varno in odgovorno okolje za vaše
          otroke.
        </p>
      </div>
      <div className="cards-main">
        {offers.map((offer: offerProps) => (
          <CardInfo
            content={offer.content}
            heading={offer.heading}
            icon={offer.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentsSection;
