/*
 * Item Messages
 *
 * This contains all the text for the Item component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Item';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Item component!',
  },
});
