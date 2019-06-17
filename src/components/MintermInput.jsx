import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../util/colors';

function convertMintermStringToObj(mintermStr) {
  const minterms = {
    terms: new Set(),
    dontCares: new Set(),
  }
  mintermStr
    .split(' ')
    .filter(termStr => termStr !== '')
    .forEach((termStr) => {
      if (termStr[0] === 'd') {
        minterms.dontCares.add(Number.parseInt(termStr.substring(1)));
      } else { 
        minterms.terms.add(Number.parseInt(termStr));
      }
  });
  return minterms;
}

function MintermInput(props) {

  const { onMintermInput } = props;
  const [ minterms, setMinterms ] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    const mintermObj = convertMintermStringToObj(minterms);
    onMintermInput(mintermObj);
    setMinterms('');
  };

  const onUserInput = (event) => {
    const inputString = event.target.value;
    const filteredInputArr = inputString.match(/[0-9d ]/g);
    const filteredInput = filteredInputArr ? filteredInputArr.join('') : '';
    setMinterms(filteredInput);
  }

  return (
    <form 
      css={css`
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.05);
        padding: 20px 0;
      `}
      onSubmit={ onFormSubmit }
    >
      <label css={css`
        color: ${colors.main};
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        Minterms
        <input 
          css={css`
            border: 2px solid ${colors.main};
            border-radius: 5px;
            height: 40px;
            width: 60%;
            text-align: center;
            margin-left: 0.75rem;
            color: ${colors.main};
            font-family: inherit;
            font-size: 1rem;
          `}
          type="text"
          id="minterm-input"
          name="minterm-input"
          placeholder="2 3 d4 10..."
          value={minterms}
          onChange={ onUserInput }
        />
      </label>
    </form>
  );
}

MintermInput.propTypes = {
  onMintermInput: PropTypes.func,
};

MintermInput.defaultProps = {
  onMintermInput: () => {},
};

export default MintermInput;
