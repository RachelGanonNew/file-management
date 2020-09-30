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
    globalState => globalState.rootFolder,
  );

export { selectGlobal, makeSelectLoading, makeSelectError, makeSelectFolders };
