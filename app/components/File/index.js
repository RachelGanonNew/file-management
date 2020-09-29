import React, { memo ,useState} from 'react';
import PropTypes from 'prop-types';
import  Pdf  from '../../components/File-types/Pdf';
import  Png  from '../../components/File-types/Png';
import  Jpg from '../../components/File-types/Jpg';
import  Docs  from '../../components/File-types/Docs';


function File(props) {
  const [isChoose,setIsChoose]=useState(false);
  const onChoose = () =>{
    if(!isChoose)
      setIsChoose(true);
    else setIsChoose(false);
    chooseDetails(path);
  };
  return <>
    <input type="checkbox"  onClick={(e)=>{onChoose(e,path)}} /> 
    {Switch(props.type)}
  </>

  function Switch(props) {
    switch (props) {
      case 'pdf': return <Pdf  name={props.name} />
      case 'png': return <Png  name={props.name} />
      case 'jpg': return <Jpg  name={props.name}/>
      case 'docs': return <Docs  name={props.name}/>
      default: return null
    }
  }

}

File.propTypes = {
  props: PropTypes.object,
};

export default memo(File);
