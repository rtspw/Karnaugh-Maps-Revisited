import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';

function TableLeftLabelBar(props) {
  const { labels, gridBoxSize } = props;

  const labelElements = [];

  labels.reverse().forEach((label, idx) => {
    const separatorStyling = (idx !== 0 && idx % 4 === 0) ? 'margin-bottom: 15px;' : '';
    labelElements.push(<div css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: ${gridBoxSize};
      padding: 0 2px;
      margin-right: 15px;
      ${separatorStyling}
    `}>
      {label}
    </div>);
  });
    
  return (
    <div css={css`
      display: flex;
      flex-direction: column-reverse;
      color: ${colors.main};
    `}>
      {labelElements}
    </div>
  );
}


TableLeftLabelBar.propTypes = {
  labels: PropTypes.array.isRequired,
  gridBoxSize: PropTypes.string.isRequired,
};

export default TableLeftLabelBar;
