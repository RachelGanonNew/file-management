/**
 *
 * Asynchronously loads the component for Pdf
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
