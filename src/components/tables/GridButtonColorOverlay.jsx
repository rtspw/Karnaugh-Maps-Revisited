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
      height: ${baseSize}px;
      width: ${baseSize / groupingColors.length}px;
      background: ${color};
      top: 0;
      left: ${(baseSize / groupingColors.length) * idx}px;
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
