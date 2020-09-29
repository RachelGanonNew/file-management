/**
 *
 * Asynchronously loads the component for Docs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
