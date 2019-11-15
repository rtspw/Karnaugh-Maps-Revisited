import React, { useState, useEffect } from 'react';
import { jsx, Global, css } from '@emotion/core';
import Cookies from 'universal-cookie';
/** @jsx jsx */

import TopBar from './components/TopBar.jsx';
import BottomBar from './components/bottom-bar/BottomBar.jsx';
import TableContainer from './components/tables/TableContainer.jsx';

import colors, { tempGroupingColors } from './util/colors';
import tableData from './util/tableData';
import MintermList from './map-solver/minterm-list';

const cookies = new Cookies();

const initialVarNumPage = cookies.get('varNumPage') || '4';

function GridButtonData() {
  this.value = '0';
  this.colors = [];
}

function App() {
  const [varNumPage, setVarNumPage] = useState(parseInt(initialVarNumPage, 10));
  const [gridValues, setGridValues] = useState(new Array(Math.pow(2, varNumPage)).fill().map(() => new GridButtonData()));
  const [gridBoxSize, setGridBoxSize] = useState(tableData[varNumPage].gridSize);
  const [mintermGroupings, setMintermGroupings] = useState([]);
  const [selectedMintermGroup, setSelectedMintermGroup ] = useState(0);
  const [activeMinterms, setActiveMinterms] = useState({
    terms: [],
    dontCares: [],
  });
  
  useEffect(() => {
    document.title = `${varNumPage} Variable K-Map Visual`;
    cookies.set('varNumPage', varNumPage, {maxAge: 604800});
  }, [varNumPage]);

  /* Changes which table is displayed */
  function handlePanelClick(varNum) {
    setVarNumPage(varNum);
    const newGridValues = new Array(Math.pow(2, varNum)).fill().map(() => new GridButtonData());
    setGridValues(newGridValues);
    setGridBoxSize(tableData[varNum].gridSize);
    setMintermGroupings([]);
  }

  /* Resets the table completely with blank grid values */
  function handleClearButtonClick() {
    setGridValues(new Array(Math.pow(2, varNumPage)).fill().map(() => new GridButtonData()));
    setMintermGroupings([]);
    setSelectedMintermGroup(0);
  }

  /* When there is more than one possible solution detected, a next button will 
   * appear next to the group display box. Clicking this button cycles to the
   * next solution and updates the colors of the grid values */
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

  /* Handles input through the text bar
   * Updates table/grid values with new groupings */
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

  /* Handles button click when table is clicked
   * Creates a new copy of the values and sets groupings in the copy
   * Then, the app is updated with the copy */
  function onGridButtonClick(decimalValue) {
    setSelectedMintermGroup(0);
    const gridValuesCopy = new Array(gridValues.length).fill()
      .map((_, idx) => JSON.parse(JSON.stringify(gridValues[idx])));
    gridValuesCopy[decimalValue].value = (() => {
      if (gridValues[decimalValue].value === '0') return '1';
      if (gridValues[decimalValue].value === '1') return 'X';
      return '0';
    })();
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

  /* Warning: Mutates gridValues */
  /* Adds a color array to the grid values depending on the groupings */
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
