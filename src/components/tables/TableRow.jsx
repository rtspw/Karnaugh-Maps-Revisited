import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';


function TableRow(props) {
  const { topTerms, leftTerm } = props;

  const tiles = [];

  topTerms.forEach((topTerm, idx) => {
    const mintermBinaryValue = leftTerm + topTerm;
    const mintermDecimalValue = parseInt(mintermBinaryValue, 2);
    const separatorStyling = (idx !== 0 && idx % 4 === 0) ? 'margin-left: 15px;' : '';
    tiles.push(
      <div css={css`
        width: 75px;
        padding: 2px;
        ${separatorStyling}
      `}>
        <div css={css`
          width: 100%;
          height: 100%;
          background: rgba(0, 100, 50, 0.03);
          font-size: 0.8rem;
          padding: 5px;
          border-radius: 2px;
          position: relative;
        `}>
          {mintermDecimalValue}
          <p css={css`
            position: absolute;
            bottom: 5px;
            right: 5px;
          `}>
            {mintermBinaryValue}
          </p>
        </div>
      </div>
    );
  });
  
  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      height: 75px;
    `}>
      {tiles}
    </div>
  );
}

TableRow.propTypes = {
  topTerms: PropTypes.array.isRequired,
  leftTerm: PropTypes.number.isRequired,
};

export default TableRow;
