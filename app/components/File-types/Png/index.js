import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img'; 
import PNG from '../../../images/png.png';
function Png(props) {
  <div>
  <Img src={PNG}></Img>
  {props.name}<br></br>
  {props.path}
</div>
}

Png.propTypes = {
  props: PropTypes.string,
};

export default memo(Png);
