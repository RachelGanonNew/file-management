import React, { memo } from 'react';
import { compose } from 'redux';
export function HomePage() {
  return(
 <div>hello project</div>)
}

export default compose(
 memo,
)(HomePage);