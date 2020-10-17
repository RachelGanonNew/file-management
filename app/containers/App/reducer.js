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
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_ERROR
} from './constants';
const _ = deepdash(lodash);
export const initialState = {
  loading: false,
  error: false,
  rootFolder: {
    path: '',
    name: '',
    children: []
  },
  list:false
};

const appReducer = (state = initialState, action) =>

  produce(state, draft => {
    switch (action.type) {

      case LOAD_CHILDREN:
      case CREATE_FOLDER:
      case DELETE_REPOS:
      case LOAD_LIST:
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
        draft.loading = false;
        break;

      case DELETE_REPOS_SUCCESS:
        const deleteItemsState = JSON.parse(JSON.stringify(state.rootFolder));
        deleteItemsState.children = JSON.parse(JSON.stringify(action.rootFolder));
        draft.rootFolder = deleteItemsState;
        break;

      case LOAD_LIST_SUCCESS:
        draft.list = action.list;
        draft.loading = false;
        break;

      case LOAD_CHILDREN_ERROR:
      case CREATE_FOLDER_ERROR:
      case DELETE_REPOS_ERROR:
      case LOAD_LIST_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      default:
    }

  });

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
export default appReducer;
