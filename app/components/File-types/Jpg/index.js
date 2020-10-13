import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useFile from '../../UseFile';

function Jpg(props) {
  const design = useFile(props);
  return (
    <div>
      {design}
    </div>
  )}

Jpg.propTypes = {
  props: PropTypes.object,
};

export default memo(Jpg);
