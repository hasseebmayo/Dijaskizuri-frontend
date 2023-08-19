import Footer from "../../components/Footer/Footer";
import SingleLogoHeader from "./SingleLogoHeader";

const TermsOfUse = () => {
  return (
    <div className="container">
      <SingleLogoHeader />
      <div className="termsNUse">
        <div className="main-heading">
          <h2>POGOJI UPORABE SPLETNE STRANI DIJASKIZURI.SI </h2>
        </div>
        <div className="privacyTitleNcontent">
          <h3>1. Uvodne določbe </h3>
          <p>
            a. Spletna stran dijaskizuri.si ("Spletna stran") je v lasti in
            upravljanju podjetja MAGNAMIC d.o.o. (DŠ: SI 12019526), s sedežem na
            Avsečevi ulici 2, v Ljubljani, Slovenija ("Upravljalec").
          </p>
          <p>
            b) Z uporabo Spletne strani se strinjate s temi Pogoji uporabe. Če
            se ne strinjate s temi pogoji, ne uporabljajte Spletne strani.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>2. Vsebina spletne strani </h3>
          <p>
            a) Vse informacije, slike, povezave do vstopnic in galerij ter druga
            vsebina na Spletni strani so zgolj informativne narave.
          </p>
          <p>
            b) Reprodukcija, distribucija, prikaz ali kakršno koli drugo
            izkoriščanje vsebine Spletne strani brez izrecnega pisnega
            dovoljenja Upravljavca je prepovedano.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>3. Uporaba spletne strani in omejitev odgovornosti </h3>
          <p>
            a) Spletna stran je namenjena mladim med 15-19 let, njihovim
            staršem, poslovnim partnerjem, medijem in drugim, vendar Upravljalec
            ne more zagotoviti, da bo vsebina primerna za vsakega uporabnika v
            tej starostni skupini.
          </p>
          <p>
            b) Upravljalec si prizadeva za točnost in ažurnost informacij,
            vendar ne prevzema odgovornosti za morebitne napake, netočnosti ali
            pomanjkljivosti informacij na Spletni strani.
          </p>
          <p>
            c) Upravljalec ne odgovarja za nobeno škodo, ki bi izhajala iz
            uporabe ali nezmožnosti uporabe Spletne strani.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>4. Komunikacija </h3>
          <p>
            a) Uporabniki lahko prek Spletne strani pošljejo sporočilo
            Upravljavcu. Pri pošiljanju sporočila je obvezna uporaba reCAPTCHA,
            da se preprečijo avtomatizirani vnos in zloraba.
          </p>
          <p>
            b) Uporabniki se zavežejo, da bodo pri pošiljanju sporočil
            posredovali točne in resnične informacije.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>5. Varstvo osebnih podatkov </h3>
          <p>
            a) Upravljalec spoštuje in varuje osebne podatke uporabnikov. Več
            informacij o varstvu osebnih podatkov je na voljo v Politiki
            zasebnosti.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>6. Spremembe Pogojev uporabe </h3>
          <p>
            a) Upravljalec si pridržuje pravico do sprememb teh Pogojev uporabe
            kadarkoli in brez predhodnega obvestila
          </p>
          <p>
            b) Uporabniki so dolžni redno preverjati Pogoje uporabe in se z
            njimi strinjati pred nadaljnjo uporabo Spletne strani.
          </p>
        </div>
        <div className="privacyTitleNcontent">
          <h3>7. Pristojnost </h3>
          <p>
            a) Morebitni spori med Upravljalcem in uporabnikom v zvezi z uporabo
            Spletne strani se rešujejo pred pristojnim sodiščem v Ljubljani,
            Slovenija.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
