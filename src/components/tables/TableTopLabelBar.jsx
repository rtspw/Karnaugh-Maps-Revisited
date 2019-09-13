import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';

function TableTopLabelBar(props) {
  const { labels, gridBoxSize } = props;

  const labelElements = [];

  labels.forEach((label, idx) => {
    const separatorStyling = (idx !== 0 && idx % 4 === 0) ? 'margin-left: 15px;' : '';
    labelElements.push(<div css={css`
      width: ${gridBoxSize};
      text-align: center;
      ${separatorStyling}
    `}>
      {label}
    </div>);
  })
  
  
  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;
      color: ${colors.main};
    `}>
      {labelElements}
    </div>
  );
}

TableTopLabelBar.propTypes = {
  labels: PropTypes.array.isRequired,
  gridBoxSize: PropTypes.string.isRequired,
};

export default TableTopLabelBar;
