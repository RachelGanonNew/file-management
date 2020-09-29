import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img';
import JPG from '../../../images/jpg.png';

function Jpg(props) {
  return (
    <div>
      <Img src={JPG}></Img>
      {props.name}<br></br>
      {props.path}
    </div>
  );
}

Jpg.propTypes = {
  props:PropTypes.string,
};

export default memo(Jpg);
