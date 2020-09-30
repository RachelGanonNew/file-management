import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import './nav-repos.css';
import File from '../File';
import Folder from '../Folder';
const key = 'folder';


const NavRepos = ({ path, childrenList, onLoadChildren }) => {
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
          />
      ) : (
          <ul key={child.path}>
            <File 
              key={child.path}
              type={child.type}
              path={child.path}
              name={child.name} /></ul>
        ),
    );
  return (
    <>
      <ul>
        {render()}
      </ul>
    </>
  );
}


NavRepos.propTypes = {
  path: PropTypes.string,
  childrenList: PropTypes.array,
  onLoadChildren: PropTypes.func,
};
export default NavRepos;
