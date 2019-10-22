import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';
import tableData from '../../util/tableData';
import GridVisualTable from './GridVisualTable.jsx';
import GroupDisplay from './GroupDisplay.jsx';

function TableContainer(props) {
  const { 
    varNum, 
    gridValues, 
    onGridButtonClick, 
    gridBoxSize,
    mintermGroupings,
  } = props;
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
      align-items: flex-start;
      flex-direction: row;
      padding: 40px 0;
      margin-bottom: 90px;
      flex-wrap: wrap;
    `}>
      <GridVisualTable 
        leftTerms={leftTerms}
        topTerms={topTerms}
        leftLabelMap={leftLabelMap}
        topLabelMap={topLabelMap}
        gridValues={gridValues}
        onClick={onGridButtonClick}
        gridBoxSize={gridBoxSize}
      />
      <GroupDisplay mintermGroupings={mintermGroupings} key={mintermGroupings.length} />
    </div>
  );
}

TableContainer.propTypes = {
  varNum: PropTypes.number.isRequired,
  gridValues: PropTypes.array.isRequired,
  onGridButtonClick: PropTypes.func.isRequired,
  gridBoxSize: PropTypes.string,
  mintermGroupings: PropTypes.array,
};

TableContainer.defaultProps = {
  gridBoxSize: '75px',
  mintermGroupings: [],
};

export default TableContainer;
