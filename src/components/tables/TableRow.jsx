import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';

import GridButton from './GridButton';

function TableRow(props) {
  const { topTerms, leftTerm, gridValues, onClick } = props;

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
        <GridButton 
          decimalValue={mintermDecimalValue} 
          binaryValue={mintermBinaryValue} 
          gridValue={gridValues[mintermDecimalValue]}
          onClick={onClick}
        />
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
  leftTerm: PropTypes.string.isRequired,
  gridValues: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TableRow;
