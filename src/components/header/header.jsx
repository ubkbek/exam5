import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import logoImg from './../../assets/images/logo.svg';
import searchImg from './../../assets/images/search-icon.svg';
import menuImg from './../../assets/images/menu-img.svg';
import closeImg from './../../assets/images/close.svg';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../components/context/searchContext';

export function Header() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  function handelToggle() {
    setToggleMenu(!toggleMenu);
  }

  const inputRef = useRef();

  // search poosts
  function handleSearch() {
    setSearchValue(inputRef.current.value);
    console.log(searchValue);
  }

  return (
    <header className={`header ${toggleMenu ? 'menu-on' : ''} container`}>
      <div className="header__left-side">
        <h1 className="visually-hidden">Boburs blog</h1>
        <Link className="header__logo-link" to={'/'}>
          <img className="header__logo-img" src={logoImg} alt="logo of Bobur" width="210px" height="58px" />
        </Link>

        <button onClick={handelToggle} className="header__menu-button">
          {toggleMenu ? (
            <img className="header__close-btn-img" src={closeImg} alt="close" width="15px" height="15px" />
          ) : (
            <img className="header__menu-btn-img" src={menuImg} alt="menu" width="32px" height="32px" />
          )}
        </button>
      </div>

      <div className={`header__right-side ${toggleMenu ? 'menu-on' : ''}`}>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink className="header__nav-link header__nav-link--active" to={'/'}>
                All
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to={'#'}>
                Design Theory
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to={'#'}>
                UX
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to={'#'}>
                UI
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink className="header__nav-link" to={'#'}>
                Typography
              </NavLink>
            </li>
          </ul>
        </nav>

        <form className="header__form">
          <input
            onChange={handleSearch}
            ref={inputRef}
            className="header__form-input"
            type="text"
            placeholder="Search"
          />

          <button className="header__form-btn">
            <img className="header__form-search-img" src={searchImg} alt="search button" width="16px" height="16px" />
          </button>
        </form>
      </div>
    </header>
  );
}
