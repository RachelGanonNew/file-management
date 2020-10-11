import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Pdf from "../File-types/Pdf";
import Png from "../File-types/Png";
import Jpg from "../File-types/Jpg";
import Docs from "../File-types/Docs";


function File(props) {

  return <>
    {Switch(props.type)}
  </>

  function Switch(type) {
    switch (type) {
      case 'pdf': return <Pdf  {...props} />
      case 'png': return <Png   {...props} />
      case 'jpg': return <Jpg   {...props} />
      case 'docs': return <Docs   {...props} />
      default: return null
    }
  }

}

File.propTypes = {
  props: PropTypes.object,
};

export default memo(File);
