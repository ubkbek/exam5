import { Link } from 'react-router-dom';
import footerLogo from './../../assets/images/footer-logo.svg';
import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <h2 className="visually-hidden">Fransiya qiroli Frank rebere</h2>
        <Link to={'/'}>
          <img className="footer__logo-img" src={footerLogo} alt="footer logo" width="182px" height="70px" />
        </Link>

        <ul className="footer__list">
          <li className="footer__item">
            <h3 className="footer__item-heading">FIGHT WITH ME ON:</h3>

            <ul>
              <li>
                <Link to={'#'}>Twitter</Link>
              </li>
              <li>
                <Link to={'#'}>Instagram</Link>
              </li>
              <li className="active">
                <Link to={'#'}>Telegram</Link>
              </li>
              <li>
                <Link to={'#'}>YouTube</Link>
              </li>
              <li>
                <Link to={'#'}>Figma</Link>
              </li>
            </ul>
          </li>

          <li className="footer__item">
            <h3 className="footer__item-heading">WHAT I HAVE DONE:</h3>

            <ul>
              <li>
                <Link to={'#'}>Xalq Kutubxonasi</Link>
              </li>
              <li>
                <Link to={'#'}>Websitee</Link>
              </li>
              <li>
                <Link to={'#'}>Play Market</Link>
              </li>
              <li className="active">
                <Link to={'#'}>App Store</Link>
              </li>
              <li>
                <Link to={'#'}>Figma</Link>
              </li>
            </ul>
          </li>

          <li className="footer__item">
            <ul>
              <li className="active">
                <Link to={'#'}>Contact</Link>
              </li>
              <li>
                <Link to={'#'}>Blog</Link>
              </li>
              <li>
                <Link to={'#'}>Dribbble</Link>
              </li>
              <li>
                <Link to={'#'}>Behance</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
