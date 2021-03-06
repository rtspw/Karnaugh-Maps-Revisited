import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import TableRow from './TableRow.jsx';
import TableTopLabelBar from './TableTopLabelBar.jsx';
import TableLeftLabelBar from './TableLeftLabelBar.jsx';

import colors from '../../util/colors';


function convertBinaryStringToVariableMinterm(binaryStr, map) {
  return binaryStr
    .split('')
    .map((char, idx) => {
      const correspondingVar = map[idx] ? map[idx] : '(NA)';
      return char === '1' ? correspondingVar : correspondingVar + "'";
    })
    .join('');
}

function GridVisualTable(props) {
  const { 
    leftTerms, 
    topTerms, 
    leftLabelMap, 
    topLabelMap, 
    gridValues,
    onClick,
    gridBoxSize,
    highlightedMinterms,
  } = props;

  const leftLabels = leftTerms.map(term => convertBinaryStringToVariableMinterm(term, leftLabelMap));
  const topLabels = topTerms.map(term => convertBinaryStringToVariableMinterm(term, topLabelMap));

  const tableRows = leftTerms.map((leftTerm, idx) => {
    const separatorStyling = (idx !== 0 && idx % 4 === 0) ? 'margin-top: 15px;' : '';
    return <div css={css`
      ${separatorStyling}
    `}
    >
      <TableRow 
        topTerms={topTerms} 
        leftTerm={leftTerm} 
        gridValues={gridValues}
        onClick={onClick}
        gridBoxSize={gridBoxSize}
      />
    </div>
  });

  return (
    <div css={css`
      display: flex;
      flex-direction: rows;
      padding-bottom: 20px;
      flex-shrink: 0;
    `}>
      <TableLeftLabelBar labels={leftLabels} gridBoxSize={gridBoxSize} />
      <div css={css`
        display: flex;
        flex-direction: column;
      `}>
        <TableTopLabelBar labels={topLabels} gridBoxSize={gridBoxSize} />
        { tableRows }
      </div>
    </div>
  );
}

GridVisualTable.propTypes = {
  leftTerms: PropTypes.array.isRequired,
  topTerms: PropTypes.array.isRequired,
  leftLabelMap: PropTypes.array.isRequired,
  topLabelMap: PropTypes.array.isRequired,
  gridValues: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  gridBoxSize: PropTypes.string.isRequired,
  highlightedMinterms: PropTypes.array.isRequired,
};

export default GridVisualTable;
