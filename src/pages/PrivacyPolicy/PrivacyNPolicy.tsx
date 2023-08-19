import Footer from "../../components/Footer/Footer";
import SingleLogoHeader from "./SingleLogoHeader";
import "./privacy.scss";
const PrivacyNPolicy = () => {
  return (
    <div className="container">
      <SingleLogoHeader />

      <div className="privacyNPolicy">
        <div className="main-heading">
          <h2>POLITIKA ZASEBNOSTI SPLETNE STRANI DIJASKIZURI.SI</h2>
        </div>
        <div className="privacyTitleNcontent">
          <h3>1.O nas </h3>
          <p>
            Spletno stran dijaskizuri.si upravlja podjetje MAGNAMIC d.o.o. (DŠ :
            SI 12019526 ), s sedežem na Avsečevi ulici 2 v Ljubljani, Slovenija.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>2. Osebni podatki, ki jih zbiramo</h3>
          <p>Zbiramo naslednje osebne podatke:</p>
          <ul>
            <li>Ime in priimek</li>
            <li>Elektronski naslov</li>
            <li>IP naslov in informacije o vašem obisku naše spletne strani</li>
          </ul>
        </div>
        <div className="privacyTitleNcontent">
          <h3>3. Namen zbiranja osebnih podatkov</h3>
          <p>Vaše osebne podatke zbiramo za:</p>
          <ul>
            <li>Komunikacijo z vami</li>
            <li>Analizo obiska in uporabe naše spletne strani</li>
            <li>Izpolnjevanje pravnih obveznosti</li>
          </ul>
        </div>
        <div className="privacyTitleNcontent">
          <h3>4. Deljenje osebnih podatkov</h3>
          <p>
            Vaših osebnih podatkov ne delimo z nobenimi tretjimi osebami, razen
            če je to potrebno za izpolnjevanje naših pravnih obveznosti ali če
            imamo vaše izrecno soglasje.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>5. Vaše pravice </h3>
          <p>V skladu z GDPR imate naslednje pravice:</p>
          <ul>
            <li> Pravica do dostopa do vaših osebnih podatkov</li>
            <li>Pravica do popravka netočnih osebnih podatkov</li>
            <li>Pravica do izbrisa vaših osebnih podatkov</li>
            <li>Pravica do omejitve obdelave vaših osebnih podatkov</li>
            <li>Pravica do ugovora obdelavi vaših osebnih podatkov</li>
            <li>Pravica do prenosljivosti podatkov</li>
          </ul>
        </div>
        <div className="privacyTitleNcontent">
          <h3>6. Piškotki </h3>
          <p>
            Naša spletna stran uporablja piškotke za izboljšanje uporabniške
            izkušnje. Za več informacij o piškotkih in kako jih uporabljamo, si
            oglejte našo Politiko piškotkov.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>7. Spremembe te politike </h3>
          <p>
            Občasno lahko posodobimo to Politiko zasebnosti. Spremembe bodo
            objavljene na naši spletni strani.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>8. Kontakt </h3>
          <p>
            Če imate vprašanja ali pripombe glede te Politike zasebnosti ali
            želite uveljavljati svoje pravice, nas kontaktirajte na
            <a href="mailto:info@dijaskizuri.si">info@dijaskizuri.si</a> ali
            preko fizične pošte na naslov Avsečeva ulica 2, 1000 Ljubljana za
            MAGNAMIC d.o.o.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyNPolicy;
