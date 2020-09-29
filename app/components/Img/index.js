import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return <img  src={props.src}    style={{width: 40, height:40}}/>;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Img;