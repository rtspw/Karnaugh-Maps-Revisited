import React, { useState, useEffect } from 'react';
import { jsx, Global, css } from '@emotion/core';
/** @jsx jsx */

import TopBar from './components/TopBar.jsx';
import BottomBar from './components/bottom-bar/BottomBar.jsx';
import TableContainer from './components/tables/TableContainer.jsx';

import colors from './util/colors';
import tableData from './util/tableData';
import MintermList from './map-solver/minterm-list';

function GridButtonData() {
  this.value = '0';
  this.colors = [];
}

function App() {
  const [varNumPage, setVarNumPage] = useState(2);
  const [gridValues, setGridValues] = useState(new Array(Math.pow(2, varNumPage)).fill().map(() => new GridButtonData()));
  const [gridBoxSize, setGridBoxSize] = useState(tableData[2].gridSize);
  const [mintermGroupings, setMintermGroupings] = useState([]);
  const [activeMinterms, setActiveMinterms] = useState({
    terms: [],
    dontCares: [],
  });
  
  useEffect(() => {
    document.title = `${varNumPage} Variable K-Map Visual`;
  });

  function handlePanelClick(varNum) {
    setVarNumPage(varNum);
    const newGridValues = new Array(Math.pow(2, varNum)).fill().map(() => new GridButtonData());
    setGridValues(newGridValues);
    setGridBoxSize(tableData[varNum].gridSize);
    setMintermGroupings([]);
  }

  function handleClearButtonClick() {
    setGridValues(new Array(Math.pow(2, varNumPage)).fill().map(() => new GridButtonData()));
    setMintermGroupings([]);
  }

  function onMintermInput(minterms) {
    setActiveMinterms(minterms);
    const newGridValues = new Array(Math.pow(2, varNumPage)).fill().map(() => new GridButtonData());
    minterms.terms.forEach(term => newGridValues[term].value = '1');
    minterms.dontCares.forEach(term => newGridValues[term].value = 'X');
    setGridValues(newGridValues);
    setMintermGroupings(new MintermList(varNumPage, minterms.terms, minterms.dontCares).getGroups());
  }

  function onGridButtonClick(decimalValue) {
    const gridValuesCopy = new Array(gridValues.length).fill()
      .map((_, idx) => JSON.parse(JSON.stringify(gridValues[idx])));
    console.log(gridValuesCopy)
    if (gridValues[decimalValue].value === '0') {
      gridValuesCopy[decimalValue].value = '1';
      gridValuesCopy[decimalValue].colors = ['rgba(30, 30, 200, 0.1)', 'rgba(200, 100, 100, 0.1)', 'rgba(100, 200, 150, 0.1)'];
    } else if (gridValues[decimalValue].value === '1') {
      gridValuesCopy[decimalValue].value = 'X';
    } else {
      gridValuesCopy[decimalValue].value = '0';
    }
    setGridValues(gridValuesCopy);
    const terms = gridValuesCopy.map((x, idx) => (x.value === '1') ? idx : null).filter(x => x !== null);
    const dontCares = gridValuesCopy.map((x, idx) => (x.value === 'X') ? idx : null).filter(x => x !== null);
    const newActiveMinterms = { terms, dontCares };
    setActiveMinterms(newActiveMinterms);
    setMintermGroupings(new MintermList(varNumPage, terms, dontCares).getGroups());
  }

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
        mintermGroupings={mintermGroupings}
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
