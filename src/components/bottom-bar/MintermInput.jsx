import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import colors from '../../util/colors';

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
        const dontcareTerm = Number.parseInt(termStr.substring(1));
        if (Number.isNaN(dontcareTerm)) return;
        minterms.dontCares.add(dontcareTerm);
      } else { 
        minterms.terms.add(Number.parseInt(termStr));
      }
  });
  minterms.terms = Array.from(minterms.terms);
  minterms.dontCares = Array.from(minterms.dontCares);
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
        width: 100%;
        padding: 0 1.5rem;
      `}
      onSubmit={ onFormSubmit }
    >
      <label css={css`
        color: ${colors.main};
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 100%;
      `}>
        Minterms
        <input 
          css={css`
            border: 2px solid ${colors.main};
            border-radius: 5px;
            height: 40px;
            text-align: center;
            color: ${colors.main};
            font-family: inherit;
            font-size: 1rem;
          `}
          type="text"
          id="minterm-input"
          name="minterm-input"
          placeholder="2 3 d4 10..."
          value={minterms}
          onChange={onUserInput}
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
