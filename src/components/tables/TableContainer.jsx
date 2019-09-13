import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';
import tableData from '../../util/tableData';
import GridVisualTable from './GridVisualTable.jsx';

function TableContainer(props) {
  const { varNum, gridValues, onGridButtonClick } = props;
  const { 
    leftTerms, 
    topTerms,
    leftLabelMap,
    topLabelMap,
  } = tableData[varNum] ? tableData[varNum] : tableData['default'];

  return (
    <div css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 40px 0;
      margin-bottom: 100px;
    `}>
      <GridVisualTable 
        leftTerms={leftTerms}
        topTerms={topTerms}
        leftLabelMap={leftLabelMap}
        topLabelMap={topLabelMap}
        gridValues={gridValues}
        onClick={onGridButtonClick}
      />
    </div>
  );
}

TableContainer.propTypes = {
  varNum: PropTypes.number.isRequired,
  gridValues: PropTypes.array.isRequired,
  onGridButtonClick: PropTypes.func.isRequired,
};

export default TableContainer;
