import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import TableRow from './TableRow.jsx';
import TableTopLabelBar from './TableTopLabelBar.jsx';
import TableLeftLabelBar from './TableLeftLabelBar.jsx';

import colors from '../../util/colors';

function TwoVarTable(props) {
  const { } = props;

  
  return (
    <div css={css`
      display: flex;
      flex-direction: rows;
    `}>
      <TableLeftLabelBar labels={["A'", "A"]} />
      <div css={css`
        display: flex;
        flex-direction: column;
        position: relative;
      `}>
        <TableTopLabelBar labels={["B'", "B"]} />
        <TableRow tileAmount={2} numOfTerms={1} leftTerms={'0'} />
        <TableRow tileAmount={2} numOfTerms={1} leftTerms={'1'} />
      </div>
    </div>
  );
}

TwoVarTable.propTypes = {

}

export default TwoVarTable;
