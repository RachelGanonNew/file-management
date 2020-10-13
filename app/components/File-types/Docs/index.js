import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useFile from '../../UseFile';
function Docs(props) {
  const design = useFile(props);
  return (
    <div>
      {design}
    </div>
  );
}

Docs.propTypes = {
  props: PropTypes.object,
};

export default memo(Docs);
