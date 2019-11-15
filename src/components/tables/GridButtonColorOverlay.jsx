import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';


function GridButtonColorOverlay(props) {
  const { 
    groupingColors,
    gridBoxSize,
    highlighted,
  } = props;

  const baseSize = parseInt(gridBoxSize, 10) - 8;

  const test = highlighted ? `&::before {
    content: '';
    background: #ffffff88;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: 0.3s ease-out pop;
  }` : '';

  const overlay = groupingColors.map((color, idx) => {
    return <div css={css`
      position: absolute;
      height: ${baseSize / groupingColors.length}px;
      width: ${baseSize}px;
      background: ${color};
      left: 0;
      top: ${(baseSize / groupingColors.length) * idx}px;
      @media (max-width: 600px) {
        width: ${baseSize/2 - 3}px;
      }
      ${test}
    `}/>
  });

  return (
    <>
      { overlay }
    </>
  );
}

GridButtonColorOverlay.propTypes = {
  groupingColors: PropTypes.array,
  gridBoxSize: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
};

GridButtonColorOverlay.defaultProps = {
  groupingColors: [],
  highlighted: false,
};

export default GridButtonColorOverlay;
