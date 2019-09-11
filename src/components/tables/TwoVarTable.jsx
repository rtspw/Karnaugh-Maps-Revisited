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
      <TableLeftLabelBar labels={["A'B'", "A'B", "AB", "AB'"]} />
      <div css={css`
        display: flex;
        flex-direction: column;
        position: relative;
      `}>
        <TableTopLabelBar labels={["C'D'", "C'D", "CD", "CD'"]} />
        <TableRow tileAmount={4} numOfTerms={2} leftTerms={'00'} />
        <TableRow tileAmount={4} numOfTerms={2} leftTerms={'01'} />
        <TableRow tileAmount={4} numOfTerms={2} leftTerms={'11'} />
        <TableRow tileAmount={4} numOfTerms={2} leftTerms={'10'} />
      </div>
    </div>
  );
}

TwoVarTable.propTypes = {

}

export default TwoVarTable;
