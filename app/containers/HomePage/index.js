import React, { memo } from 'react';
import { compose } from 'redux';
import './home.css';
export function HomePage() {
  return(<>
<h1>Welcome to </h1><h1 className="menu-blue">TheFront</h1>
<h2>Manage anything your files needs.</h2>
<label>This project is an excellent project template that </label>
<p>includes all the best practice for writing a React project at a very high level.</p>

  </>
 )
}

export default compose(
 memo,
)(HomePage);