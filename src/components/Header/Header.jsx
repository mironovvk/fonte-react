import './Header.scss';
import LogoHeader from '@/assets/images/logo/logo.svg?react';
import Button from '@/ui/Button';
import { Link } from 'react-router-dom';

const Header = ({ navLinks = [] }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">
          <LogoHeader />
        </Link>

        <nav className="header__nav">
          <ul className="header__list header__list--nav">
            {navLinks.map(({ id, title, link }) => (
              <li className="header__item" key={id}>
                <Link className="header__link" to={`/${link}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ul className="header__actions-list">
            <li className="header__actions-item">
				<Button>Войти</Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
