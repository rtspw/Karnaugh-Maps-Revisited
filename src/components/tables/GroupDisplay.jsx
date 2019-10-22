import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */


import colors from '../../util/colors';
import GroupDisplayRow from './GroupDisplayRow.jsx';

function GroupDisplay(props) {
  const { mintermGroupings } = props;
  const [ selectedMintermGroup, setSelectedMintermGroup ] = useState(0);

  const mintermGroups = mintermGroupings.length > 0 ? mintermGroupings[selectedMintermGroup] : [];

  function goToNextGrouping() {
    let next = (() => {
      if (selectedMintermGroup + 1 >= mintermGroupings.length) return 0;
      return selectedMintermGroup + 1;
    })();
    setSelectedMintermGroup(next);
  }

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
        <h4>Groups ({ mintermGroups.length })</h4>
        { mintermGroupings.length > 1 &&
          <button 
            onClick={goToNextGrouping} 
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
};

GroupDisplay.defaultProps = {
  mintermGroupings: [],
};

export default GroupDisplay;
