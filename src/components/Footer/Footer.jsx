import "./Footer.scss";
import LogoFooter from "@/assets/icons/logo/logo-footer.svg?react";
import { Link } from "react-router";

const Footer = ({ linksNav }) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <LogoFooter />
        <ul className="footer__list footer__list--nav">
          {linksNav.map(({ id, title, link }) => (
            <li className="footer__item" key={id}>
              <Link to={`/${link}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__list footer__list--legal">
          {linksLegal.map(({ id, title, link }) => (
            <li className="footer__item" key={id}>
              <a href={`/${link}`}>{title}</a>
            </li>
          ))}
        </ul>
        <ul className="footer__list footer__list--social">
          {linksSocial.map(({ id, icon, link }) => (
            <li className="footer__item" key={id}>
              <a href={`/${link}`}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
