import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../util/colors';

function TopBar(props) {
  const { children, title, subtitle } = props;
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      padding: 1rem;
    `}>
      <header css={css`
        text-align: center;
      `}>
        <h1 css={css`
          color: ${colors.main};
        `}>
          { title }
        </h1>
        <h2 css={css`
          font-weight: normal;
          color: ${colors.minor};
        `}>
          { subtitle }
        </h2>
      </header>
      {children}
    </div>
  );
}

TopBar.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default TopBar;
