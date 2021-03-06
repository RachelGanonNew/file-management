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

export function loadChildren(path) {
  return {
    type: LOAD_CHILDREN,
    path,
  };
}

export function loadChildrenSuccess(path,children) {
  return {
    type: LOAD_CHILDREN_SUCCESS,
    path,
    children,
  };
}

export function loadChildrenError(error) {
  return {
    type: LOAD_CHILDREN_ERROR,
    error,
  };
}
export function deleteRepos(choosePathes) {
  return {
    type: DELETE_REPOS,
    choosePathes,
  };
}
export function deleteReposSuccess(rootFolder) {
  return {
    type: DELETE_REPOS_SUCCESS,
    rootFolder,
  };
}
export function deleteReposError(error) {
  return {
    type: DELETE_REPOS_ERROR,
    error,
  };
}
export function createNewFolder(path,name){
  return {
    type: CREATE_FOLDER,
    path,
    name,
  };
}
export function createNewFolderSuccess(path,name,repos){
  return {
    type: CREATE_FOLDER_SUCCESS,
    path,
    name,
    repos
  };
}
export function createNewFolderError(error) {
  return {
    type: CREATE_FOLDER_ERROR,
    error,
  };
}
export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

export function listLoaded(list) {
  return {
    type: LOAD_LIST_SUCCESS,
    list,
  };
}

export function listLoadingError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}
