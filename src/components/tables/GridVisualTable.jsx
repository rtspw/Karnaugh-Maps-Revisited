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
  } = props;

  const leftLabels = leftTerms.map(term => convertBinaryStringToVariableMinterm(term, leftLabelMap));
  const topLabels = topTerms.map(term => convertBinaryStringToVariableMinterm(term, topLabelMap));

  const tableRows = leftTerms.map((leftTerm, idx) => {
    const separatorStyling = (idx !== 0 && idx % 4 === 0) ? 'margin-top: 15px;' : '';
    return <div css={css`
      ${separatorStyling}
    `}>
      <TableRow 
        topTerms={topTerms} 
        leftTerm={leftTerm} 
        gridValues={gridValues}
        onClick={onClick}
      />
    </div>
  });

  return (
    <div css={css`
      display: flex;
      flex-direction: rows;
    `}>
      <TableLeftLabelBar labels={leftLabels} />
      <div css={css`
        display: flex;
        flex-direction: column;
        position: relative;
      `}>
        <TableTopLabelBar labels={topLabels} />
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
};

export default GridVisualTable;
