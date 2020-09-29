import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from '../../Img';
import DOCS from '../../../images/docs.png';

function Docs(props) {
  return (
    <div>
      <Img src={DOCS}></Img>
      {props.name}<br></br>
      {props.path}
    </div>
  );
}

Docs.propTypes = {
  props: PropTypes.string,
};

export default memo(Docs);
