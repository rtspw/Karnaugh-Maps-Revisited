import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

const buttonStyle = css`
  padding: 1rem;
  color: #06a77d;
  font-weight: bold;
  border-bottom: px solid #06a77d;
  &:hover {
    background: #06a77d;
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
      border: 2px solid #06a77d;
    `}>
      <ul css={css`cursor: pointer;`}>
        <li><button css={buttonStyle} onClick={onClick}>2</button></li>
        <li><button css={buttonStyle} onClick={onClick.bind(this)}>3</button></li>
        <li><button css={buttonStyle} onClick={onClick.bind(this)}>4</button></li>
        <li><button css={buttonStyle} onClick={onClick.bind(this)}>5</button></li>
      </ul>
    </nav>
  );
}
// /#03644b

MapPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
}

MapPanel.defaultProps = {
  onClick: () => {},
}

export default MapPanel;
