/**
 *
 * Asynchronously loads the component for UseFile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
