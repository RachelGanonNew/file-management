/**
 *
 * Asynchronously loads the component for File
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
