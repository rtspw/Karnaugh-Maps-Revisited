import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import TwoVarTable from './TwoVarTable.jsx';

import colors from '../../util/colors';

function TableContainer(props) {
  const { } = props;
  return (
    <div css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 40px 0;
    `}>
      <TwoVarTable />
    </div>
  );
}

TableContainer.propTypes = {

}

export default TableContainer;
