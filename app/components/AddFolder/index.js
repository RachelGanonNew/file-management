import React, { memo , useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../materialUi.moduls';

function AddFolder({path,createNewFolder}) {
  const [folderNameInput,setFolderNameInput]=useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateFolderNameInput= event =>{
    setFolderNameInput(event.target.value);
  };
  const createFolder=()=>{
    createNewFolder(path,folderNameInput);
    setFolderNameInput("");
  };
  function add(event){
    if(event.key === 'Enter'){
      createFolder(path,folderNameInput);
      setFolderNameInput("");
      handleClose();
    }
  }
  return ( <>
    <TextField
      id="outlined-basic" 
      label="Folder Name"
      onChange={updateFolderNameInput}
      variant="outlined" onKeyPress={(event) => add(event)} />
  </>
  )
}

AddFolder.propTypes = {
  path:PropTypes.string,
  createNewFolder:PropTypes.func,
};

export default memo(AddFolder);

