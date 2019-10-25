import React from 'react';

import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';

function GroupDisplayRow(props) {
  const { mintermGroup } = props;

  const groupingText = mintermGroup.decimalRepresentation.map((dec, idx) => {
    if (idx === mintermGroup.decimalRepresentation.length - 1) return dec;
    return `${dec}, `;
  });

  groupingText.unshift('(');
  groupingText.push(') ');

  return (
      <div css={css`
          padding: 10px;
          padding-left: 0px;
          max-width: 200px;
          display: flex;
          align-items: center;
        `}
      >
        <div css={css`
          border-radius: 50%;
          height: 12px;
          width: 12px;
          background: ${mintermGroup.color};
          margin-right: 10px;
          flex-shrink: 0;
        `}>
        </div>
          { groupingText.join('') }
          {mintermGroup.outputTerm}
      </div>
  );
}

GroupDisplayRow.propTypes = {
  mintermGroup: PropTypes.object.isRequired,
};


export default GroupDisplayRow;
