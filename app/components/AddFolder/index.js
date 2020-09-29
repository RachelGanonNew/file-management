// /**
//  *
//  * AddFolder
//  *
//  */

// import React, { memo } from 'react';
// // import PropTypes from 'prop-types';
// // import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// function AddFolder() {
//   return (
//     <div>
//       <FormattedMessage {...messages.header} />
//     </div>
//   );
// }

// AddFolder.propTypes = {};

// export default memo(AddFolder);
/**
 *
 * AddFolder
 *
 */

import React,{useState} from 'react';
import PropTypes from 'prop-types';

import './add-folder.css';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function AddFolder({path,createNewFolder}) {
  const [isAble,setIsAble]=useState(false);
  const [inputValue,setInputValue]=useState("");
  const enableNewFolder=()=>{
    if(isAble)
      setIsAble(false);
    else
      setIsAble(true);
  }
  const createFolder=()=>{
    // setInputValue(event.target.value);
    createNewFolder(path,inputValue);
    setIsAble(false);
    setInputValue("");
  };
  const updateInputValue= event =>{
    setInputValue(event.target.value);
  };

  return (<div className="add_folder">
    <button type="button" onClick={enableNewFolder} className="add-button"><i className="fa fa-plus-square" id="d"></i><i className="far fa-folder"></i></button>
    {isAble &&
  <div id="inputWrapper"><input type="text" placeholder="insert name" onChange={updateInputValue} id="folderInput" onBlur={createFolder} className="form-control"/>
    {/* <button type="button" onClick={createFolder}>create</button> */}
  </div>
    }
  </div>);
}

AddFolder.propTypes = {
  path:PropTypes.string,
  createNewFolder:PropTypes.func,
};

export default AddFolder;
