/**
 *
 * Asynchronously loads the component for Item
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
