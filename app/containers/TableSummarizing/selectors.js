import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tableSummarizing state domain
 */

const selectTableSummarizingDomain = state =>
  state.tableSummarizing || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TableSummarizing
 */

const makeSelectTableSummarizing = () =>
  createSelector(
    selectTableSummarizingDomain,
    substate => substate,
  );

export default makeSelectTableSummarizing;
export { selectTableSummarizingDomain };
