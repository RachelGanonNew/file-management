import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import NavRepos from '../../components/navRepos/index';
import  {loadChildren }  from '../App/actions';
import './folderPage.css';
export function FolderPage({folders, onLoadChildren} ) {

  return (
    <>
      <Helmet>
        <title>FolderPage</title>
        <meta name="description" content="Description of FolderPage" />
      </Helmet> 
        <NavRepos
         key={folders.path}
         onLoadChildren={onLoadChildren}
         path={folders.path}
         name={folders.name} 
         childrenList={folders.children}
       />
     </>
  );
}


FolderPage.propTypes = {
  folders: PropTypes.object,
  onLoadChildren: PropTypes.func,
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
