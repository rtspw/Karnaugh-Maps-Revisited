import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';

function TableTopLabelBar(props) {
  const { labels } = props;

  const labelElements = [];

  for (const label of labels) {
    labelElements.push(<div css={css`
      width: 75px;
      text-align: center;
    `}>{label}</div>);
  }
  
  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;
    `}>
      {labelElements}
    </div>
  );
}

TableTopLabelBar.propTypes = {
  labels: PropTypes.array.isRequired,
};

export default TableTopLabelBar;
