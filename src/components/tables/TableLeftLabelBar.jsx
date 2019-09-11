import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';

function TableLeftLabelBar(props) {
  const { labels } = props;

  const labelElements = [];

  for (const label of labels.reverse()) {
    labelElements.push(<div css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 75px;
      padding: 0 2px;
      margin-right: 15px;
    `}>
      {label}
    </div>);
  }
  
  return (
    <div css={css`
      display: flex;
      flex-direction: column-reverse;
    `}>
      {labelElements}
    </div>
  );
}

TableLeftLabelBar.propTypes = {
  labels: PropTypes.array.isRequired,
};

export default TableLeftLabelBar;
