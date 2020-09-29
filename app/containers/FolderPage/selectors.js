import { createSelector } from 'reselect';
import { initialState } from '../App/reducer';


/**
 * Direct selector to the foldersPage state domain
 */

const selectFoldersPageDomain = state => state.foldersPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FoldersPage
 */

const makeSelectFoldersPage = () =>
  createSelector(
    selectFoldersPageDomain,
    substate => substate,
  );

export default makeSelectFoldersPage;
export { selectFoldersPageDomain };
