import React, { memo } from 'react';
import { compose } from 'redux';
import Recaptcha from 'react-google-invisible-recaptcha';
import './home.css';
export function HomePage() {
  return (<>
    <h1>Welcome to </h1>
    <h1 className="menu-blue">TheFront</h1>
    <h2>Manage anything your files needs.</h2>
    <p>This project is an excellent project template that </p>
    <p>includes all the best practice for writing a React project at a very high level.</p>

    <Recaptcha
      sitekey='6LdnbNcZAAAAAC4UIy4I2mTOqrZpHbEhNzvyaFBS'
      onResolved={() => console.log('Human detected.')} />
  </>
  )
}

export default compose(
  memo,
)(HomePage);