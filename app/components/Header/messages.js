import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  folders: {
    id: `${scope}.folders`,
    defaultMessage: 'Folders',
  },
  table: {
    id: `${scope}.table`,
    defaultMessage: 'Table',
  },
});
