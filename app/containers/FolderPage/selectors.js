import { createSelector } from 'reselect';
import { initialState } from '../App/reducer';
const selectFoldersPageDomain = state => state.foldersPage || initialState;

const makeSelectFoldersPage = () =>
  createSelector(
    selectFoldersPageDomain,
    substate => substate,
  );

export default makeSelectFoldersPage;
export { selectFoldersPageDomain };
