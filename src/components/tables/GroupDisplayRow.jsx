import React from 'react';

import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';

function GroupDisplayRow(props) {
  const { mintermGroup, key } = props;
  return (
      <div css={css`
          padding: 10px;
          max-width: 200px;
        `}
        key={key}>
          {'('}
          {mintermGroup.decimalRepresentation.map((dec, idx) => {
            if (idx === mintermGroup.decimalRepresentation.length - 1) return <span>{dec}</span>
            return <span>{dec + ', '}</span>
          })}
          {')  '}
          {mintermGroup.outputTerm}
      </div>
  );
}

GroupDisplayRow.propTypes = {
  mintermGroup: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired,
};

export default GroupDisplayRow;
