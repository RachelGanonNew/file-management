import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useFile from '../../UseFile';

function Png(props) {
  const design = useFile(props);

  return (
    <div>
      {design}
    </div>
  )
}

Png.propTypes = {
  props: PropTypes.object,
};

export default memo(Png);
