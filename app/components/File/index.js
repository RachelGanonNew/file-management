import React, { memo ,useState} from 'react';
import PropTypes from 'prop-types';
import  Pdf  from '../../components/File-types/Pdf';
import  Png  from '../../components/File-types/Png';
import  Jpg from '../../components/File-types/Jpg';
import  Docs  from '../../components/File-types/Docs';


function File(props) {
  
  return <>
    {Switch(props.type)}
  </>

  function Switch(type) {
    switch (type) {  
      case 'pdf': return <Pdf  {...props} />
      case 'png': return <Png   {...props}  />
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
