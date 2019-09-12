import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';
import tableData from '../../util/tableData';
import GridVisualTable from './GridVisualTable.jsx';

function TableContainer(props) {
  const { varNum } = props;
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
      />
    </div>
  );
}

TableContainer.propTypes = {
  varNum: PropTypes.number.isRequired,
};

export default TableContainer;
