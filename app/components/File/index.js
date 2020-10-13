import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Pdf from "../File-types/Pdf";
import Png from "../File-types/Png";
import Jpg from "../File-types/Jpg";
import Docs from "../File-types/Docs";

import PdfIcon from '../../images/pdf.png';
import JpgIcon from '../../images/jpg.png';
import PngIcon from '../../images/png.png';
import DocsIcon from '../../images/docs.png';
function File(props) {
  return <>
    {Switch(props.type)}
  </>

  function Switch(type) {
    switch (type) {
      case 'pdf': return <Pdf  {...props}  icon={PdfIcon}/>
      case 'png': return <Png   {...props} icon={PngIcon}/>
      case 'jpg': return <Jpg   {...props} icon={JpgIcon}/>
      case 'docs': return <Docs   {...props} icon={DocsIcon}/>
      default: return null
    }
  }

}

File.propTypes = {
  type: PropTypes.string,
};

export default memo(File);
