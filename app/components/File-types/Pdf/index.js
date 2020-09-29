import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img';
import PDF from '../../../images/pdf.png';
function Pdf(props) {
  return (
    <div>
      <Img src={PDF}></Img>
      {props.name}<br></br>
      {props.path}
    </div>
  );
}

Pdf.propTypes = {
  props:PropTypes.string,
};

export default memo(Pdf);
