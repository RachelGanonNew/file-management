import React from 'react';
import HEADER from '../../images/header.png';
import { FormattedMessage } from 'react-intl';
import Img from '../Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return <div>
  <img  src={HEADER} id="header-img"></img>
  <NavBar>
        <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/folders">
        <FormattedMessage {...messages.folders} />
        </HeaderLink>
      </NavBar>
  </div> 
}

Header.propTypes = {};

export default Header;
