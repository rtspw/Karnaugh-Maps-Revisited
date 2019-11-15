import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';


function GridButtonColorOverlay(props) {
  const { 
    groupingColors,
    gridBoxSize,
  } = props;

  const baseSize = parseInt(gridBoxSize, 10) - 8;

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
};

GridButtonColorOverlay.defaultProps = {
  groupingColors: [],
};

export default GridButtonColorOverlay;
