import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
// import reducer from './reducer';
import PropTypes from 'prop-types';
// import saga from './saga';
// import  NavRepos from '../../components/nav-repos';
// import {
//   makeSelectRepos,
// } from 'containers/App/selectors';
import Folder from '../../components/Folder/index';
import  {loadChildren,createNewFolder,deleteItem }  from '../App/actions';
import './folderPage.css';
// { repos }
export function FolderPage({folders, onLoadChildren,createFolder,deleteItems} ) {
  // useInjectReducer({ key: 'folderPage', reducer });
  // useInjectSaga({ key: 'folderPage', saga });

  return (
    <>
      <Helmet>
        <title>FolderPage</title>
        <meta name="description" content="Description of FolderPage" />
      </Helmet> 
        {/* {
         repos.map((r) => { 
           return <NavRepos type={r.type} name={r.name}  key={r.path} path={r.path}/> })
        } */}
        <button type="button" className="buttonDelete" onClick={deleteItems}>
          <i className='fas fa-trash-alt'></i>
        </button>

        <Folder
         createFolder={createFolder} 
         key={folders.path}
         onLoadChildren={onLoadChildren}
         path={folders.path}
         name={folders.name} 
         childrenList={folders.children}
         chooseDetails={chooseDetails} />
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
  deleteItems:PropTypes.func,
  createFolder:PropTypes.func,
};
const mapStateToProps = (state) => ({folders: state.global.rootFolders})


const mapDispatchToProps = (dispatch) => ({
  onLoadChildren: path => dispatch(loadChildren(path)),
  deleteItems: () => dispatch(deleteItem(choosePathes)),
  createFolder: (path,name)=>dispatch(createNewFolder(path,name)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps  
);
export default compose(withConnect)(FolderPage);

// FolderPage.propTypes = {
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
// };

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
// });

// const withConnect = connect(
//   mapStateToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(FolderPage);
