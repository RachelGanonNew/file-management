import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useFile from '../../UseFile';

function Pdf(props) {
  const design = useFile(props);

  return (
    <div>
      {design}
    </div>
  );
}

Pdf.propTypes = {
  props:PropTypes.object,
};

export default memo(Pdf);
