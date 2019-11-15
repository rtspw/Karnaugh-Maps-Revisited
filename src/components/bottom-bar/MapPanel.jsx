import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import MapPanelButton from './MapPanelButton.jsx';

import colors from '../../util/colors';


function MapPanel(props) {
  const { activeButton, onClick } = props;
  return (
    <div css={css`
      color: ${colors.main};
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      height: 100%;
      padding: 0 1.5rem;
    `}>
      Variables
      <nav css={css`
        background: white;
        border-radius: 5px;
        height: 40px;
        border: 2.5px solid ${colors.main};
      `}>

        <ul css={css`
          display: flex;
          height: 100%;
        `}>
          <MapPanelButton onClick={onClick} varNum={2} activeButtonNum={activeButton} />
          <MapPanelButton onClick={onClick} varNum={3} activeButtonNum={activeButton} />
          <MapPanelButton onClick={onClick} varNum={4} activeButtonNum={activeButton} />
          <MapPanelButton onClick={onClick} varNum={5} activeButtonNum={activeButton} />
          <MapPanelButton onClick={onClick} varNum={6} activeButtonNum={activeButton} />
        </ul>
      </nav>
    </div>
  );
}

MapPanel.propTypes = {
  onClick: PropTypes.func,
  activeButton: PropTypes.number,
}

export default MapPanel;
