import React from 'react';
import { FormattedMessage } from 'react-intl';
import HEADER from '../../images/logo.jpg';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import './img.css';
function Header() {
  return <div>
    <img src={HEADER} id="header-img"></img>
    <NavBar>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/folders">
        <FormattedMessage {...messages.folders} />
      </HeaderLink>
      <HeaderLink to="/table">
        <FormattedMessage {...messages.table} />
      </HeaderLink>
    </NavBar>
  </div>
}

Header.propTypes = {};

export default Header;
