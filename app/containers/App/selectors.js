// /**
//  * The global state selectors
//  */

// import { createSelector } from 'reselect';
// import { initialState } from './reducer';

// const selectGlobal = state => state.global || initialState;

// const selectRouter = state => state.router;

// const makeSelectLoading = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.loading,
//   );

// const makeSelectError = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.error,
//   );

// const makeSelectRepos = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.repos,
//   );

//   const makeSelectCurrentUser = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.currentUser,
//   );

// const makeSelectLocation = () =>
//   createSelector(
//     selectRouter,
//     routerState => routerState.location,
//   );

// export {
//   selectGlobal,
//   makeSelectLoading,
//   makeSelectError,
//   makeSelectRepos,
//   makeSelectLocation,
//   makeSelectCurrentUser
// };
/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectFolders = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.rootFolders,
  );

export { selectGlobal, makeSelectLoading, makeSelectError, makeSelectFolders };
