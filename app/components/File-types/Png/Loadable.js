/**
 *
 * Asynchronously loads the component for Png
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
