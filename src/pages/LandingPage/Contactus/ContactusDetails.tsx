import { Calender, Location } from "../../../assets/images";
import contact from "../../../assets/images/Contact.png";
import Button from "../../../components/Button/Button";
const ContactusDetails = () => {
  return (
    <div className="contact-us-Details">
      <div className="contact-detail-img">
        <img src={contact} alt="contact" />
      </div>
      <div className="contact-content">
        <h3>Največji back 2 school party</h3>
        <div className="club-location-box">
          <div className="club-city">
            <Location />
            <p>Kampus </p>
          </div>
          <div className="club-bar">|</div>
          <div className="club-city">
            <Calender />
            <p>22 / 9 / 2023</p>
          </div>
        </div>
        <div className="club-details">
          <p>
            Dijaški žuri Ljubljana, vas vabimo na največji Največji Back 2
            School Party! 🎉 Na Kampusu bomo ustvarili nepozabno doživetje na
            prostem, kjer bomo skupaj proslavili začetek novega šolskega leta.
            ✨ Označite si 22.9.2023 na svojih koledarjih, skupaj ga bomo žurali
            v družbi več kot 2000 sovrstnikov! 
          </p>
          <p>
            Ne zamudite priložnosti za nova prijateljstva, noro glasbo in
            nepozabne trenutke pod zvezdnatim nebom. 🎶🥳 
          </p>
          <p>
            Začnimo šolsko leto v dobri družni in energiji. 💥 Vstopnice bodo na
            voljo 1. septembra, zato bodite hitri, saj pričakujemo, da se bodo
            razprodale v zelo hitro! 🎟️🔥 
          </p>
          <p>
            Dijaški žuri Ljubljana smo tu za vas! Skupaj bomo začetek šolskega
            leta spremenili v nepozabno izkušnjo in ustvarili še eno noč brez
            limita.  
          </p>
        </div>
        <div className="club-btn">
          <a
            href="https://partikarte.si/najvecji-back-to-school-party"
            target="_blank"
          >
            <Button text="Kupi vstopnices" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactusDetails;
