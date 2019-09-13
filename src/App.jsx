import React, { useState, useEffect } from 'react';
import { jsx, Global, css } from '@emotion/core';
/** @jsx jsx */

import TopBar from './components/TopBar.jsx';
import BottomBar from './components/BottomBar.jsx';
import TableContainer from './components/tables/TableContainer.jsx';

import colors from './util/colors';


function App() {
  const [varNumPage, setVarNumPage] = useState(2);
  const [gridValues, setGridValues] = useState(new Array(Math.pow(2, varNumPage)).fill('0'));
  const [activeMinterms, setActiveMinterms] = useState({
    terms: [],
    dontCares: [],
  });
  
  useEffect(() => {
    document.title = `${varNumPage} Variable K-Map Visual`;
  });

  function handlePanelClick(varNum) {
    setVarNumPage(varNum);
    const newGridValues = new Array(Math.pow(2, varNum)).fill('0');
    activeMinterms.terms.forEach(termIdx => {
      newGridValues[termIdx] = '1';
    })
    activeMinterms.dontCares.forEach(termIdx => {
      newGridValues[termIdx] = 'X';
    })
    setGridValues(newGridValues);
  }

  function onMintermInput(minterms) {
    setActiveMinterms(minterms);
  }

  function onGridButtonClick(decimalValue) {
    const gridValuesCopy = gridValues.slice();
    if (gridValues[decimalValue] === '0') {
      gridValuesCopy[decimalValue] = '1';
    } else if (gridValues[decimalValue] === '1') {
      gridValuesCopy[decimalValue] = 'X';
    } else {
      gridValuesCopy[decimalValue] = '0';
    }
    setGridValues(gridValuesCopy);
    const terms = gridValuesCopy.map((x, idx) => (x === '1') ? idx : null).filter(x => x !== null);
    const dontCares = gridValuesCopy.map((x, idx) => (x === 'X') ? idx : null).filter(x => x !== null);
    setActiveMinterms({ terms, dontCares });
  }
  console.log(activeMinterms);

  return (
    <div css={css`
      height: 100vh;
    `}>
      <Global styles={css`
        body {
          background: ${colors.background};
        }
      `} />
      <TopBar 
        title={`Karnaugh Map`}
        subtitle={`${varNumPage} Variables`}  
      />
      <TableContainer 
        varNum={varNumPage}
        gridValues={gridValues}
        onGridButtonClick={onGridButtonClick}
      />
      <BottomBar 
        onMintermInput={onMintermInput}
        onPanelClick={handlePanelClick} 
        activeButton={varNumPage}
      />
    </div>
  );
}

export default App;
