import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import MapPanel from './MapPanel.jsx';
import MintermInput from './MintermInput.jsx';
import ClearButton from './ClearButton.jsx';

import colors from '../util/colors';

function BottomBar(props) {
  const { activeButton, onMintermInput, onClearButtonClick, onPanelClick } = props;
  return (
    <div css={css`
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 2rem 0;
    `}>
      <div css={css`
        display: flex;
        flex-direction: row;
      `}>
        <MintermInput onMintermInput={onMintermInput} />
        <ClearButton onClick={onClearButtonClick} />
      </div>
      <MapPanel onClick={onPanelClick} activeButton={activeButton}/>
    </div>
  );
}

BottomBar.propTypes = {
  onMintermInput: PropTypes.func,
  onClearButtonClick: PropTypes.func,
  onPanelClick: PropTypes.func,
  activeButton: PropTypes.number,
}

export default BottomBar;
