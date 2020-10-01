import React, { memo } from 'react';
import { TextField } from '../../materialUi.moduls';
import PropTypes from 'prop-types';

function AddFolder(props) {
const [folderNameInput,setFolderNameInput]=useState("");

const updateFolderNameInput= event =>{
  setFolderNameInput(event.target.value);
};
 function add(event){
    if(event.key === 'Enter'){
      props.createFolder(props.path,folderNameInput);
      setFolderNameInput("");
    }
}
  return ( <>
    <TextField id="outlined-basic" 
    label="Folder Name"
    onChange={updateFolderNameInput}
     variant="outlined" onKeyPress={(event) => add(event)} />
  </>
  )
}

AddFolder.propTypes = {
  props:PropTypes.object
};

export default memo(AddFolder);

