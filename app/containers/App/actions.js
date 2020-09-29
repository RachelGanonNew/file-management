// import {
//    LOAD_REPOS, 
//    LOAD_REPOS_SUCCESS,
//     LOAD_REPOS_ERROR,
//     GET_REPOS,
//     ADD_REPOS,
//     DELETE_REPOS
//    } from './constants';

// /**
//  * Load the repositories, this action starts the request saga
//  *
//  * @return {object} An action object with a type of LOAD_REPOS
//  */
// export function loadRepos() {
//   return {
//     type: LOAD_REPOS,
//   };
// }

// /**
//  * Dispatched when the repositories are loaded by the request saga
//  *
//  * @param  {array} repos The repository data
//  * @param  {string} username The current username
//  *
//  * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
//  */
// export function reposLoaded(repos) {
//   return {
//     type: LOAD_REPOS_SUCCESS,
//     repos,
//   };
// }

// /**
//  * Dispatched when loading the repositories fails
//  *
//  * @param  {object} error The error
//  *
//  * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
//  */
// export function repoLoadingError(error) {
//   return {
//     type: LOAD_REPOS_ERROR,
//     error,
//   };
// }
// export function getRepos(reposName) {
//   return {
//     type: GET_REPOS,
//     reposName,
//   };
// }

// export function deleteRepos(reposName) {
//   return {
//     type: DELETE_REPOS,
//     reposName
//   };
// }
// export function addRepos(repos) {
//   return {
//     type: ADD_REPOS,
//     repos
//   };
// }

import { 
   LOAD_CHILDREN,
   LOAD_CHILDREN_SUCCESS, 
   LOAD_CHILDREN_ERROR, 
   CREATE_FOLDER, DELETE_ITEMS
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
    type: DELETE_ITEMS,
    choosePathes,
  };
}
export function createNewFolder(path,name){
  return {
    type: CREATE_FOLDER,
    path,
    name,
  };
}

