/**
 *
 * Asynchronously loads the component for GetTable
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
