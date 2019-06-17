import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import MapPanelButton from './MapPanelButton.jsx';

import colors from '../util/colors';


function MapPanel(props) {
  const { activeButton, onClick } = props;
  return (
    <nav css={css`
      background: white;
      border-radius: 5px;
      height: 40px;
      border: 2px solid ${colors.main};
    `}>
      <ul css={css`
        cursor: pointer;
        display: flex;
        height: 100%;
        align-items: stretch;
      `}>
        <MapPanelButton onClick={onClick} varNum={2} activeButtonNum={activeButton} />
        <MapPanelButton onClick={onClick} varNum={3} activeButtonNum={activeButton} />
        <MapPanelButton onClick={onClick} varNum={4} activeButtonNum={activeButton} />
        <MapPanelButton onClick={onClick} varNum={5} activeButtonNum={activeButton} />
      </ul>
    </nav>
  );
}

MapPanel.propTypes = {
  onClick: PropTypes.func,
  activeButton: PropTypes.number,
}

export default MapPanel;
