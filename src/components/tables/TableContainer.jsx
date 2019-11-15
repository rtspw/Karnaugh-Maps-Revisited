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
    mintermGroups,
    selectedMintermGroup,
    onNextGroupingButtonClick,
    numberOfGroupings,
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
      padding-top: 40px;
      padding-bottom: 120px;
      flex-wrap: no-wrap;
      @media (max-width: 600px) {
        flex-wrap: wrap;
      }
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
      <GroupDisplay 
        mintermGroups={mintermGroups} 
        key={mintermGroups.length} 
        selectedMintermGroup={selectedMintermGroup}
        numberOfGroupings={numberOfGroupings}
        onNextGroupingButtonClick={onNextGroupingButtonClick}
      />
    </div>
  );
}

TableContainer.propTypes = {
  varNum: PropTypes.number.isRequired,
  gridValues: PropTypes.array.isRequired,
  onGridButtonClick: PropTypes.func.isRequired,
  onNextGroupingButtonClick: PropTypes.func.isRequired,
  selectedMintermGroup: PropTypes.number,
  gridBoxSize: PropTypes.string,
  mintermGroups: PropTypes.array,
  numberOfGroupings: PropTypes.number,
};

TableContainer.defaultProps = {
  selectedMintermGroup: 0,
  gridBoxSize: '75px',
  mintermGroups: [],
  numberOfGroupings: 1,
};

export default TableContainer;
