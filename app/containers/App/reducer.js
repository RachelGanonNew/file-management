import produce from 'immer';
import deepdash from 'deepdash';
import lodash from 'lodash-es';
import {
  LOAD_CHILDREN,
  LOAD_CHILDREN_SUCCESS,
  LOAD_CHILDREN_ERROR,
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_ERROR,
  DELETE_REPOS,
  DELETE_REPOS_SUCCESS,
  DELETE_REPOS_ERROR,
} from './constants';
import * as data from '../../../server/data/data.json';
const _ = deepdash(lodash);
export const initialState = {
  loading: false,
  error: false,
  rootFolder: {
    path: '',
    name: '',
    children: []
  },
};

const appReducer = (state = initialState, action) =>

  produce(state, draft => {
    switch (action.type) {

      case LOAD_CHILDREN:
      case CREATE_FOLDER:
      case DELETE_REPOS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_CHILDREN_SUCCESS:
        const folder = getCurrent(state.rootFolder, action.path);
        folder.children = action.children;
        draft.rootFolder = { ...state.rootFolder };
        draft.loading = false;
        break;
      case CREATE_FOLDER_SUCCESS: 
      case DELETE_REPOS_SUCCESS:   
        break;


      case LOAD_CHILDREN_ERROR:
      case CREATE_FOLDER_ERROR:
      case DELETE_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      default:
    }

  });

const deep = (list, p) => {
  const res = _.findDeep(list, { path: p }, { childrenPath: "children", leavesOnly: false, skipChildren: true });
  console.log("res.value", res.value);
  return res.value;
};



const getCurrent = (rootFolders, childPath) => {
  const pathList = childPath.split('/');
  let folder = rootFolders;
  if (folder.name === childPath) return folder;

  pathList.forEach(pathName => {
    if (pathName !== '') {
      folder = folder.children.find(currentFolder => currentFolder.name === pathName);
    }
  });

  return folder;
};

function deleteFromTree(o, id) {
  let index;
  function getNode(a, i) {
    if (a.path === id) {
      index = i;
      return true;
    }
    if (Array.isArray(a.children) && a.children.some(getNode)) {
      if (index >= 0) {
        a.children.splice(index, 1);
        index = -1;
      }
      return true;
    }
    return true;
  }
  index = -1;
  [o].some(getNode);
}
const isValid = (action) => action.name !== '' && action.name !== ' ';
const getChildrenByPath = (path) => {
  const pathList = path.split('/');
  let count = 0;
  let folders = data.default;
  if (path !== '') {
    pathList.forEach(pathName => {
      count += 1;
      if (pathName !== '') {
        folders = folders.find(f => f.name === pathName);
        if (pathList.length !== count)
          folders = folders.children;
      }
    })
  };
  return folders;
}

export default appReducer;
