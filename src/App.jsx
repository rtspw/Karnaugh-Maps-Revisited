import React, { useState, useEffect } from 'react';
import { jsx, Global, css } from '@emotion/core';
/** @jsx jsx */

import TopBar from './components/TopBar.jsx';
import BottomBar from './components/bottom-bar/BottomBar.jsx';
import TableContainer from './components/tables/TableContainer.jsx';

import colors from './util/colors';
import tableData from './util/tableData';
import MintermList from './map-solver/minterm-list';

function App() {
  const [varNumPage, setVarNumPage] = useState(2);
  const [gridValues, setGridValues] = useState(new Array(Math.pow(2, varNumPage)).fill('0'));
  const [gridBoxSize, setGridBoxSize] = useState('200px');
  const [mintermGroups, setMintermGroups] = useState([]);
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
    setGridValues(newGridValues);
    setGridBoxSize(tableData[varNum].gridSize);
    setMintermGroups([]);
  }

  function handleClearButtonClick() {
    setGridValues(new Array(Math.pow(2, varNumPage)).fill('0'));
    setMintermGroups([]);
  }

  function onMintermInput(minterms) {
    setActiveMinterms(minterms);
    const newGridValues = new Array(Math.pow(2, varNumPage)).fill('0');
    minterms.terms.forEach(term => newGridValues[term] = '1');
    minterms.dontCares.forEach(term => newGridValues[term] = 'X');
    setGridValues(newGridValues);
    setMintermGroups(new MintermList(varNumPage, minterms.terms, minterms.dontCares).getGroups()[0]);
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
    const newActiveMinterms = { terms, dontCares };
    setActiveMinterms(newActiveMinterms);
    setMintermGroups(new MintermList(varNumPage, terms, dontCares).getGroups()[0]);
  }
  console.log(mintermGroups);

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
        gridBoxSize={gridBoxSize}
        mintermGroups={mintermGroups}
      />
      <BottomBar 
        onMintermInput={onMintermInput}
        onClearButtonClick={handleClearButtonClick}
        onPanelClick={handlePanelClick} 
        activeButton={varNumPage}
      />
    </div>
  );
}

export default App;
