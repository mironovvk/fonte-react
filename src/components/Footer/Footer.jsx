import "./Footer.scss";
import LogoFooter from "@/assets/icons/logo/logo-footer.svg?react";
import {Link} from "react-router";
import {socialLinks, legalLinks} from "@/mocks/footer.mock.jsx";

const Footer = ({navLinks = []}) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className='footer__logo' href="/"><LogoFooter /></a>
        <div className="footer__list-wrapper">
          <ul className="footer__list footer__list--nav">
            {navLinks.map(({id, title, link}) => (
              <li
                className="footer__item"
                key={id}
              >
                <a
                  className="footer__link"
                  href={`/${link}`}
                >{title}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__list footer__list--legal">
            {legalLinks.map(({id, title, link}) => (
              <li
                className="footer__item"
                key={id}
              >
                <a
                  className="footer__link"
                  href={`/${link}`}
                >{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="footer__list footer__list--social">
          {socialLinks.map(({id, icon, link}) => (
            <li
              className="footer__item footer__item--social"
              key={id}
            >
              <a
                className="footer__link footer__link--social"
                href={`/${link}`}
              >{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
