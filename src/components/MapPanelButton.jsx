import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../util/colors';

const buttonStyle = css`
  padding: 0 1rem;
  height: 100%;
  color: ${colors.main};
  font-weight: bold;
  &:hover {
    background: ${colors.main};
    color: white;
    cursor: pointer;
  }
`;

const activeButtonStyle = css`
  padding: 0 1rem;
  height: 100%;
  background: ${colors.main};
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

function MapPanelButton(props) {
  const { activeButtonNum, varNum, onClick } = props;

  const style = (activeButtonNum === varNum) ? activeButtonStyle : buttonStyle;
  
  return (
    <li>
      {  }
      <button css={style} onClick={onClick.bind(null, varNum)}>
        {varNum}
      </button>
    </li>
  );
}

MapPanelButton.propTypes = {
  onClick: PropTypes.func,
  activeButtonNum: PropTypes.number,
  varNum: PropTypes.number.isRequired,
}

export default MapPanelButton;
