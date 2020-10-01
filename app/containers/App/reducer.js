import produce from 'immer';
import {
  LOAD_CHILDREN_SUCCESS,
  LOAD_CHILDREN,
  LOAD_CHILDREN_ERROR,
  CREATE_FOLDER,
  DELETE
} from './constants';
import * as data from '../../data/repos-data.json';

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
        draft.loading = true;
        draft.error = false;
        break;
        
      case LOAD_CHILDREN_SUCCESS:
        const folder = getFolderByPath(state.rootFolder, action.path);
        folder.children = action.children;
        draft.rootFolder = { ...state.rootFolder };
        draft.loading = false;
        break;

      case LOAD_CHILDREN_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case CREATE_FOLDER:
        //מקבל לפונקציה addFolder path ושם של תיקיה להוסיף
      case DELETE:
       
        break;
      default:
    }
  });

const getFolderByPath = (rootFolder, path) => {
  const listSepartePathes = path.split('/');
  let folder = rootFolder;
  if (folder.name === path)
    return folder;

  listSepartePathes.forEach(pathName => {
    if (pathName !== '') {
      folder = folder.children.find(currentFolder => currentFolder.name === pathName);
    }
  });

  return folder;
};



export default appReducer;
