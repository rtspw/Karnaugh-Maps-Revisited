import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';

const tableRowStyle = css`
  display: flex;
  flex-direction: row;
`;

function TwoVarTruthTable(props) {
  const { } = props;

  
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      flex-flow: column wrap;
      flex-grow: 1;
      flex-basis: 50vw;
      justify-content: center;
      padding: 0 2rem;
    `}>
    <div css={tableRowStyle}>
        <div>A</div>
        <div>B</div>
        <div>O</div>
    </div>
    { ([...Array(5).keys()]).map(elem => 
      <div css={tableRowStyle}>
        <div>0</div>
        <div>1</div>
        <div>0</div>
      </div>
    ) }


    </div>
  );
}

TwoVarTruthTable.propTypes = {

}

export default TwoVarTruthTable;
