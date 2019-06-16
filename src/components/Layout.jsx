import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../util/colors';

function Layout(props) {
  const { children, title, subtitle } = props;
  return (
    <div css={css`
      background: #eee;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      height: 100vh;
      // margin-right: ${48 + 40}px;
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

Layout.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Layout;
