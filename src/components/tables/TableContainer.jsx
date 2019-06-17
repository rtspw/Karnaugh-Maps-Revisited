import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import TwoVarTable from './TwoVarTable.jsx';
import TwoVarTruthTable from './TwoVarTruthTable.jsx';

import colors from '../../util/colors';

function TableContainer(props) {
  const { } = props;
  return (
    <div css={css`
      display: flex;
      justify-content: center;
      /background: orange;
      max-height: 70%;
    `}>
      <TwoVarTable />
      <TwoVarTruthTable />
    </div>
  );
}

TableContainer.propTypes = {

}

export default TableContainer;
