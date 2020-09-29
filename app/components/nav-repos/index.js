import React, { memo } from 'react';
import PropTypes from 'prop-types';
import  Folder  from '../Folder';
import  File  from '../File';
function NavRepos(props) {
  return (
    <>
    {
     props.type === "folder" ? <Folder  name={props.name} path={props.path} type={props.type}/>:
     <File name={props.name} path={props.path} type={props.type}/>
    }
    </>
  );
}

NavRepos.propTypes = {
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
export default memo(NavRepos);
