import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';
import GroupDisplayRow from './GroupDisplayRow.jsx';

function GroupDisplay(props) {
  const { 
    mintermGroups, 
    onNextGroupingButtonClick,
    numberOfGroupings,
  } = props;

  return (
    <div css={css`
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      margin-left: 50px;
      width: 200px;
      @media (max-width: 600px) {
        width: 80%;
        margin-left: 0;
        padding-top: 20px;
      }
    `}>
      <div css={css`
        display: flex;
        flex-direction: row;
        padding-bottom: 15px;
        margin-bottom: 10px;
        text-align: center;
        color: ${colors.main};
        width: 100%;
        @media (max-width: 600px) {
          border-bottom: 1.5px solid ${colors.minor};
        }
      `}>
        <h4>Groups ({ mintermGroups.length })</h4>
        { numberOfGroupings > 1 &&
          <button 
            onClick={onNextGroupingButtonClick} 
            css={css`
              font-family: inherit;
              font-size: 0.9rem;
              padding-left: .5rem;
              cursor: pointer;
            `}
          >
            Next
          </button>
        }
      </div>
      { mintermGroups.map((group, idx) =>
        <GroupDisplayRow mintermGroup={group} key={idx} />
      )}
    </div>
  );
}

GroupDisplay.propTypes = {
  mintermGroupings: PropTypes.array,
  onNextGroupingButtonClick: PropTypes.func.isRequired,
  numberOfGroupings: PropTypes.number.isRequired,
};

GroupDisplay.defaultProps = {
  mintermGroupings: [],
};

export default GroupDisplay;