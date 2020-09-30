import { 
   LOAD_CHILDREN,
   LOAD_CHILDREN_SUCCESS, 
   LOAD_CHILDREN_ERROR, 
   CREATE_FOLDER,
   DELETE
  } from './constants';

/**
 * Load the children of specific path, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CHILDREN
 */
export function loadChildren(path) {
  return {
    type: LOAD_CHILDREN,
    path,
  };
}

/**
 * Dispatched when the children are loaded by the request saga
 *
 * @param  {array} children The children of specific path
 *
 * @return {Array}       array with a type of LOAD_CHILDREN_SUCCESS passing the repos
 */
export function childrenLoaded(path, children) {
  return {
    type: LOAD_CHILDREN_SUCCESS,
    path,
    children,
  };
}
/**
 * Dispatched when loading the children fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CHILDREN_ERROR passing the error
 */
export function childrenLoadingError(error) {
  return {
    type: LOAD_CHILDREN_ERROR,
    error,
  };
}
export function deleteItem(choosePathes) {
  return {
    type: DELETE,
    choosePathes,
  };
}
export function createFolder(path,name){
  return {
    type: CREATE_FOLDER,
    path,
    name,
  };
}

