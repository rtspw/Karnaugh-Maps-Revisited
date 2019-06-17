import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import MapPanel from './MapPanel.jsx';
import MintermInput from './MintermInput.jsx';

import colors from '../util/colors';

function BottomBar(props) {
  const { activeButton, onMintermInput, onPanelClick } = props;
  return (
    <div css={css`
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 0;
    `}>
      <MintermInput onMintermInput={onMintermInput} />
      <MapPanel onClick={onPanelClick} activeButton={activeButton}/>
    </div>
  );
}

BottomBar.propTypes = {
  onMintermInput: PropTypes.func,
  onPanelClick: PropTypes.func,
  activeButton: PropTypes.number,
}

export default BottomBar;
