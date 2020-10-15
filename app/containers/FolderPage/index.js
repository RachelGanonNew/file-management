import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import NavRepos from '../../components/navRepos/index';
import { Button, DeleteIcon } from '../../materialUi.moduls';
import { loadChildren, createNewFolder, deleteRepos } from '../App/actions';
import './folderPage.css';
import DialogEarse from '../../components/DialogEarse';

let choosePathes = [];
export function FolderPage({ folders, onLoadChildren, createFolder, deleteRep }) {
  const MEASURE = 3;
  const [showDialog, setShowDialog] = useState(false);
  function navFunction() {
    if (choosePathes.length >= MEASURE) {
      if (!showDialog) {
        setShowDialog(true);
      }
    }
    else  {
      deleteRep();
    }
  }
  function chooseDetails(path) {
    if (choosePathes.includes(path))
      choosePathes = choosePathes.filter(pathItem => pathItem !== path);
    else
      choosePathes.push(path);
  };
  return (
    <>
      <Helmet>
        <title>FolderPage</title>
        <meta name="description" content="Description of FolderPage" />
      </Helmet>
      <Button
        onClick={navFunction}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      {showDialog && <DialogEarse deleteRep={deleteRep} choosePathes={choosePathes} folders={folders} />}
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



FolderPage.propTypes = {
  folders: PropTypes.object,
  onLoadChildren: PropTypes.func,
  createFolder: PropTypes.func,
  deleteRep: PropTypes.func,
};


const mapStateToProps = (state) => ({ folders: state.global.rootFolder })

const mapDispatchToProps = (dispatch) => ({
  onLoadChildren: path => dispatch(loadChildren(path)),
  deleteRep: () => { dispatch(deleteRepos(choosePathes))},
  createFolder: (path, name) => dispatch(createNewFolder(path, name)),

});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(FolderPage);
