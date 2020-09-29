/*
 * DialogEarse Messages
 *
 * This contains all the text for the DialogEarse component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.DialogEarse';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Are you sure?',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'CANCEL',
  },
  ok: {
    id: `${scope}.ok`,
    defaultMessage: 'OK',
  },
});
