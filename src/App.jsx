import React, { useState, useEffect } from 'react';
import { jsx, Global, css } from '@emotion/core';
/** @jsx jsx */

import TopBar from './components/TopBar.jsx';
import BottomBar from './components/bottom-bar/BottomBar.jsx';
import TableContainer from './components/tables/TableContainer.jsx';

import colors, { tempGroupingColors } from './util/colors';
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
  const [selectedMintermGroup, setSelectedMintermGroup ] = useState(0);
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
    setSelectedMintermGroup(0);
  }

  function handleNextGroupingButtonClick() {
    let next = (() => {
      if (selectedMintermGroup + 1 >= mintermGroupings.length) return 0;
      return selectedMintermGroup + 1;
    })();
    setSelectedMintermGroup(next);
    const newGridValues = new Array(Math.pow(2, varNumPage)).fill().map(() => new GridButtonData());
    activeMinterms.terms.filter(term => term < Math.pow(2, varNumPage)).forEach(term => newGridValues[term].value = '1');
    activeMinterms.dontCares.filter(term => term < Math.pow(2, varNumPage)).forEach(term => newGridValues[term].value = 'X');
    resetGridColors(newGridValues);
    setupGridColors(newGridValues, mintermGroupings[next]);
    setGridValues(newGridValues);
  }

  function onMintermInput(minterms) {
    setSelectedMintermGroup(0);
    setActiveMinterms(minterms);
    const newGridValues = new Array(Math.pow(2, varNumPage)).fill().map(() => new GridButtonData());
    minterms.terms.filter(term => term < Math.pow(2, varNumPage)).forEach(term => newGridValues[term].value = '1');
    minterms.dontCares.filter(term => term < Math.pow(2, varNumPage)).forEach(term => newGridValues[term].value = 'X');
    const mintermGroupings = new MintermList(varNumPage, minterms.terms, minterms.dontCares).getGroups();
    setMintermGroupings(mintermGroupings);
    resetGridColors(newGridValues);
    setupGridColors(newGridValues, mintermGroupings[0]);
    setGridValues(newGridValues);
  }

  function onGridButtonClick(decimalValue) {
    setSelectedMintermGroup(0);
    const gridValuesCopy = new Array(gridValues.length).fill()
      .map((_, idx) => JSON.parse(JSON.stringify(gridValues[idx])));
    console.log(gridValuesCopy)
    if (gridValues[decimalValue].value === '0') {
      gridValuesCopy[decimalValue].value = '1';
    } else if (gridValues[decimalValue].value === '1') {
      gridValuesCopy[decimalValue].value = 'X';
    } else {
      gridValuesCopy[decimalValue].value = '0';
    }
    const terms = gridValuesCopy.map((x, idx) => (x.value === '1') ? idx : null).filter(x => x !== null);
    const dontCares = gridValuesCopy.map((x, idx) => (x.value === 'X') ? idx : null).filter(x => x !== null);
    const newActiveMinterms = { terms, dontCares };
    const mintermGroupings = new MintermList(varNumPage, terms, dontCares).getGroups();
    setActiveMinterms(newActiveMinterms);
    setMintermGroupings(mintermGroupings);
    resetGridColors(gridValuesCopy);
    setupGridColors(gridValuesCopy, mintermGroupings[0]);
    setGridValues(gridValuesCopy);
  }
  
  /* Warning: Mutates gridValues */
  function resetGridColors(gridValues) {
    gridValues.forEach(gridValue => {
      gridValue.colors = [];
    })
  }

  /* Warning: Mutates gridValues and groupings */
  function setupGridColors(gridValues, grouping = []) {
    grouping.forEach((group, groupingIdx) => {
      group.color = tempGroupingColors[groupingIdx];
      group.decimalRepresentation.forEach(gridIdx => {
        gridValues[gridIdx].colors.push(tempGroupingColors[groupingIdx]);
      });
    });
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
        onNextGroupingButtonClick={handleNextGroupingButtonClick}
        gridBoxSize={gridBoxSize}
        mintermGroups={mintermGroupings[selectedMintermGroup]}
        numberOfGroupings={mintermGroupings.length}
        selectedMintermGroup={selectedMintermGroup}
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
