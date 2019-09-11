import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';


function TableRow(props) {
  const { tileAmount, numOfTerms, leftTerms } = props;

  const tiles = [];
  const columnSequence = [0, 1, 3, 2];
  for (let i = 0; i < tileAmount; i++) {
    const columnValue = columnSequence[i] ? columnSequence[i] : 0;
    const mintermBinaryValue = leftTerms + columnValue.toString(2).padStart(numOfTerms, '0');
    const mintermDecimalValue = parseInt(mintermBinaryValue, 2);
    tiles.push(
      <div css={css`
        width: 75px;
        padding: 2px;
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
