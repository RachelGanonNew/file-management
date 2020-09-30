import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AddFolder() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddFolder.propTypes = {};

export default memo(AddFolder);


