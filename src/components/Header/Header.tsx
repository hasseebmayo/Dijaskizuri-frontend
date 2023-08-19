import { useState } from "react";
import { Bars, CrossIcon, Logo } from "../../assets/images";
import useClickOutside from "../../utils/useOutSideHook";
import Button from "../Button/Button";

import "./header.component.scss";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));
  return (
    <nav className="header-main-section">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-list">
        <a href="#contactUs">Dogodki</a>
        <a href="#gallery">Galerija</a>
        <a href="#parents">Za starše</a>
        <a href="#students">Za dijake</a>
        {isOpen ? (
          <CrossIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <Bars
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
        <a href="#contactUs" className="contact-usBtn">
          <Button text="Kontakt" />
        </a>
        {isOpen ? (
          <div className="dropdown-header" ref={ref}>
            <a href="#contactUs">Dogodki</a>
            <a href="#gallery">Galerija</a>
            <a href="#parents">Za starše</a>
            <a href="#students">Za dijake</a>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
