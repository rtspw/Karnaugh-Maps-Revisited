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
  } = props;

  const leftLabels = leftTerms.map(term => convertBinaryStringToVariableMinterm(term, leftLabelMap));
  const topLabels = topTerms.map(term => convertBinaryStringToVariableMinterm(term, topLabelMap));

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
        { leftTerms.map(leftTerm => {
          return <TableRow topTerms={topTerms} leftTerm={leftTerm} />
        }) }
      </div>
    </div>
  );
}

GridVisualTable.propTypes = {
  leftTerms: PropTypes.array.isRequired,
  topTerms: PropTypes.array.isRequired,
  leftLabelMap: PropTypes.array.isRequired,
  topLabelMap: PropTypes.array.isRequired,
};

export default GridVisualTable;
