import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';

const buttonStyle = css`
  padding: 0 1rem;
  margin-top: 24px;
  height: 40px;
  color: ${colors.main};
  background: white;
  border-radius: 5px;
  border: 2.5px solid ${colors.main};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${colors.main};
    color: white;
  }
`;

function ClearButton(props) {
  const { onClick } = props;
  return (
    <div >
      <button css={buttonStyle} onClick={() => onClick()}>
        Clear
      </button>
    </div>
  );
}

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearButton;
