import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import saga from '../../containers/App/saga';
import './nav-repos.css';
import File from '../File';
import Folder from '../Folder';
const key = 'folder';


const NavRepos = ({ path, childrenList, onLoadChildren, createFolder, chooseDetails }) => {
  console.log("children", childrenList);
  useInjectSaga({ key, saga });
  useEffect(() => {
    if (path === '') onLoadChildren(path);
  }, []);
  const render = () =>
    childrenList.map(child =>
      child.type === key ? (
        <Folder
          key={child.path}
          name={child.name}
          path={child.path}
          childrenList={child.children}
          onLoadChildren={onLoadChildren}
          chooseDetails={chooseDetails}
          createFolder={createFolder}
        />
      ) : (
          <ul key={child.path}>
            <File
              key={child.path}
              type={child.type}
              path={child.path}
              name={child.name}
              chooseDetails={chooseDetails} /></ul>
        ),
    );
  return (
    <>
      <div>
        {render()}
      </div>
    </>
  );
}

NavRepos.propTypes = {
  path: PropTypes.string,
  childrenList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onLoadChildren: PropTypes.func,
  createFolder: PropTypes.func,
  chooseDetails: PropTypes.func,
};
export default NavRepos;
