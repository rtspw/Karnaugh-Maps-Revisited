import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../util/colors';

const buttonStyle = css`
  padding: 1rem;
  color: ${colors.main};
  font-weight: bold;
  border-bottom: px solid ${colors.main};
  &:hover {
    background: ${colors.main};
    color: white;
    cursor: pointer;
  }
`;

function MapPanel(props) {
  const { onClick } = props;
  return (
    <nav css={css`
      position: absolute;
      top: 20px;
      right: 20px;
      background: white;
      border-radius: 5px;
      border: 2px solid ${colors.main};
    `}>
      <ul css={css`cursor: pointer;`}>
        <li><button css={buttonStyle} onClick={onClick.bind(null, 2)}>2</button></li>
        <li><button css={buttonStyle} onClick={onClick.bind(null, 3)}>3</button></li>
        <li><button css={buttonStyle} onClick={onClick.bind(null, 4)}>4</button></li>
        <li><button css={buttonStyle} onClick={onClick.bind(null, 5)}>5</button></li>
      </ul>
    </nav>
  );
}

MapPanel.propTypes = {
  onClick: PropTypes.func,
}

export default MapPanel;
