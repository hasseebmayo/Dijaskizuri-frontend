import { ReactNode } from "react";
import CardInfo from "../../../components/Card/CardInfo";
import "./student.pages.scss";
import {
  DotsIcon,
  HeadphonIcon,
  Party2Icon,
  PartyIcon,
  PeopleGroupIcon,
} from "../../../assets/images";
export type offerProps = {
  icon: ReactNode;
  heading: string;
  content: string;
};
const StudentsSection = () => {
  const offers: offerProps[] = [
    {
      heading: "Vrhunski animatorji",
      content:
        "Energični animatorji, ki z navdušenjem sledijo najnovejšim trendom in prinašajo svežino na vsak dogodek.",
      icon: <PeopleGroupIcon />,
    },
    {
      content:
        "Investiramo v napredne tehnologije, ki zagotavljajo osupljivo avdiovizualno doživetje na vsaki zabavi.",
      heading: "Tehnološke inovacije:",
      icon: <DotsIcon />,
    },
    {
      content:
        " Organiziramo tematske dogodke z inovativnimi idejami, ki preprečujejo monotonost in vsakemu obiskovalcu ponujajo edinstveno izkušnjo.",
      heading: "Edinstveni tematski dogodki:",
      icon: <PartyIcon />,
    },
    {
      content:
        "Izbor najboljših DJ-ev, ki s svojo glasbo ustvarjajo energično in edinstveno vzdušje na plesišču.",
      heading: "Najboljši DJ-i:",
      icon: <HeadphonIcon />,
    },
    {
      content:
        "Premišljeno načrtovanje zabav z raznolikimi rekviziti, ki obogatijo dogajanje in zagotavljajo nepozabne trenutke.",
      heading: "Nepozabne popestritve:",
      icon: <Party2Icon />,
    },
  ];
  return (
    <div className="student-main-container" id="students">
      <div className="student-heading">
        <h5>Za dijake</h5>
        <p>
          Poudarjamo inovativnost, svežino in zabavo, s ciljem slediti
          najnovejšim trendom in zagotavljati nepozabna doživetja. Usmerjeni smo
          v ustvarjanje edinstvenega vzdušja za neponovljive zabave
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

export default StudentsSection;
