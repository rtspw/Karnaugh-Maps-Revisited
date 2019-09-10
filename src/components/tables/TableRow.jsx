import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';


function TableRow(props) {
  const { tileAmount, numOfTerms, leftTerms } = props;

  const tiles = [];
  for (let i = 0; i < tileAmount; i++) {
    const mintermBinaryValue = leftTerms + i.toString(2).padStart(numOfTerms, '0');
    const mintermDecimalValue = parseInt(mintermBinaryValue, 2);
    tiles.push(
      <div css={css`
        width: 75px;
        padding: 2px;
      `}>
        <div css={css`
          width: 100%;
          height: 100%;
          background: rgba(5, 26, 44, 0.1);
          font-size: 0.8rem;
          padding: 5px;
        `}>
          {mintermDecimalValue}
        </div>
      </div>
    );
  }
  
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
  tileAmount: PropTypes.number.isRequired,
  numOfTerms: PropTypes.number.isRequired,
  leftTerms: PropTypes.number.isRequired,
};

export default TableRow;
