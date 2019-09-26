import React from 'react';

import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';
import GroupDisplayRow from './GroupDisplayRow.jsx';

function GroupDisplay(props) {
  const { mintermGroups } = props;
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      margin-left: 50px;
    `}>
      <div css={css`
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
        text-align: center;
        color: ${colors.main};
        width: 200px;
      `}>
        Groups
      </div>
      { mintermGroups.map((group, idx) => 
        <GroupDisplayRow mintermGroup={group} key={idx} 
      />
      )}
    </div>
  );
}

GroupDisplay.propTypes = {
  mintermGroups: PropTypes.array,
};

GroupDisplay.defaultProps = {
  mintermGroups: [],
};

export default GroupDisplay;
