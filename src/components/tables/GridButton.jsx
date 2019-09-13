import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';


function GridButton(props) {
  const { binaryValue, decimalValue, gridValue, onClick } = props;
  const valueStyling = (() => {
    if (gridValue === '1') {
      return `border: 2px solid ${colors.gridButtonTrue};`;
    } else if (gridValue === 'X') {
      return `border: 2px solid ${colors.gridButtonDontCare};`;
    }
  })();
  return (
    <button css={css`
        width: 100%;
        height: 100%;
        background: ${colors.gridButton};
        border-radius: 3px;
        position: relative;
        &:hover {
          cursor: pointer;
          outline: 2px solid ${colors.gridButtonHover};
        }
        ${valueStyling}
      `}
      onClick={() => onClick(decimalValue)}
    >
      <p css={css`
        font-size: 1rem;
      `}>
        {gridValue}
      </p>
      <p css={css`
        position: absolute;
        top: 5px;
        left: 5px;
        font-size: 0.8rem;
      `}>
        {decimalValue}
      </p>
      <p css={css`
        position: absolute;
        bottom: 5px;
        right: 5px;
        font-size: 0.8rem;
      `}>
        {binaryValue}
      </p>
    </button>
  );
}

GridButton.propTypes = {
  binaryValue: PropTypes.number.isRequired,
  decimalValue: PropTypes.number.isRequired,
  gridValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GridButton;
