import { Calender, Location } from "../../../assets/images";
// import contact from "../../../assets/images/Contact.png";
import Button from "../../../components/Button/Button";
const ContactusDetails = () => {
  return (
    <div className="contact-us-Details">
      <div className="contact-detail-img">
        <img
          src={
            "https://fienta.com/getimage/uploads/2023/10/73562/73562-231019090759.png?w=1070&fm=webp&dpr=1&s=4868e807c5d8db489789365f57e9c66b"
          }
          alt="contact"
        />
      </div>
      <div className="contact-content">
        <h3>Las Vegas Balkan Party</h3>
        <div className="club-location-box">
          <div className="club-city">
            <Location />
            <p>Club Pure</p>
          </div>
          <div className="club-bar">|</div>
          <div className="club-city">
            <Calender />
            <p>10 / 11 / 2023</p>
          </div>
        </div>
        <div className="club-details">
          <p>Dragi dijaki in dijakinje!</p>
          <br />
          <p>
            Pridružite se najjači zabavi v mestu, kjer se bodo združili ritmi
            Balkana s sijajem Las Vegasa. Pričakujte nepozabne efekte 🎊,
            balkanske hite 🎵 in svetleče neonske luči 🚨. Žuranje in
            presenečenja čakajo na vas! Ne zamudite priložnosti da se udeležite
            še ene noči brez limita 🎊
          </p>
        </div>
        <div className="club-btn">
          <a href="https://fienta.com/las-vegas-balkan-party" target="_blank">
            <Button text="Kupi vstopnice" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactusDetails;
