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
        <h3>Največji Dijaški XMAS Party</h3>
        <div className="club-location-box">
          <div className="club-city">
            <Location />
            <p>HALA Kampus</p>
          </div>
          <div className="club-bar">|</div>
          <div className="club-city">
            <Calender />
            <p>22 / 12 / 2023</p>
          </div>
        </div>
        <div className="club-details">
          <p>Dragi dijaki in dijakinje!</p>
          <br />
          <p>
            Pridružite se nam na nepozabnem Največjem Dijaškem Xmas Partyju!
            Doživite praznični čar z mešanico zimskih melodij in modernih
            ritmov. Pričakujte osupljive praznične dekoracije 🎄, vrhunske DJ
            nastope 🎶 in žareče božične luči ✨. Zabava bo trajala vso noč s
            presenečenji, ki vas bodo pustila brez besed! Ne zamudite te
            fantastične priložnosti, da praznujete božični čas na edinstven
            način 🎉. Vabljeni na noč, polno glasbe, plesa in nepozabnih
            trenutkov!
          </p>
          <p>
            📍Hala Kampus ( Ogrevano & Pokrito Prizorišče) Pivovarniška ulica 6,
            1000 Ljubljana 🗓 22.12.2023 Vstop od 20.00 - 21.00
          </p>
        </div>
        <div className="club-btn">
          <a
            href="https://ﬁenta.com/najvecji-dijaski-xmas-party"
            target="_blank"
          >
            <Button text="Kupi vstopnice" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactusDetails;
