import React ,{useState} from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import NavRepos from '../../components/navRepos/index';
import {Button , DeleteIcon}  from '../../materialUi.moduls';
import  {loadChildren,createFolder ,deleteRepos}  from '../App/actions';
import './folderPage.css';
export function FolderPage({folders, onLoadChildren,createFolder,deleteRepos,chooseDetails } ) {
const [isDialogOpen,setIsDialogOpen]=useState(false)
  return (
    <>
      <Helmet>
        <title>FolderPage</title>
        <meta name="description" content="Description of FolderPage" />
      </Helmet> 
      <Button
      onClick={deleteRepos}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
        <NavRepos
         key={folders.path}
         onLoadChildren={onLoadChildren}
         path={folders.path}
         name={folders.name} 
         childrenList={folders.children}
         createFolder={createFolder}
         chooseDetails={chooseDetails} 
       />
     </>
  );
}

let choosePathes = [];

const chooseDetails = path =>{ 
  if(choosePathes.includes(path))
    choosePathes = choosePathes.filter(pathItem => pathItem!==path);
  else choosePathes.push(path);   
};
FolderPage.propTypes = {
  folders: PropTypes.object,
  onLoadChildren: PropTypes.func,
  createFolder:PropTypes.func,
  deleteRepos:PropTypes.func,
  
};
const mapStateToProps = (state) => ({folders: state.global.rootFolder})


const mapDispatchToProps = (dispatch) => ({
  onLoadChildren: path => dispatch(loadChildren(path)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps  
);
export default compose(withConnect)(FolderPage);
