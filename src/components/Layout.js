import React from 'react';

import { jsx, css } from '@emotion/core';
/** @jsx jsx */

const buttonStyle = css`
  padding: 1rem;
  color: #06a77d;
  font-weight: bold;
  &:hover {
    background: #03644b;
    color: white;
  }
`;

function MapPanel() {
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
        <li><button css={css`
          ${buttonStyle}
          border-top-right-radius: 3px;
          border-top-left-radius: 3px;
        `}>2</button></li>
        <li><button css={buttonStyle}>3</button></li>
        <li><button css={buttonStyle}>4</button></li>
        <li><button css={css`
          ${buttonStyle}
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
        `}>5</button></li>
      </ul>
    </nav>
  );
}
// /#03644b

export default MapPanel;
