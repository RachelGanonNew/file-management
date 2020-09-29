import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './Wrapper';
function Footer() {
  return <Wrapper>
   <div>
     <FormattedMessage {...messages.header} />
  </div>
  </Wrapper>
}

Footer.propTypes = {};

export default Footer;
