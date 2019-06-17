import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

import TopBar from './components/TopBar.jsx';
import BottomBar from './components/BottomBar.jsx';
import TwoVarTable from './components/tables/TwoVarTable.jsx';
import TableContainer from './components/tables/TableContainer.jsx';

import colors from './util/colors';

function App() {
  const [varNumPage, setVarNumPage] = useState(2);
  const [activeMinterms, setActiveMinterms] = useState({
    terms: new Set(),
    dontCares: new Set(),
  });
  
  useEffect(() => {
    console.log(activeMinterms);
    document.title = `${varNumPage} Variable K-Map Visual`;
  });

  function handlePanelClick(varNum) {
    setVarNumPage(varNum);
  }

  function onMintermInput(minterms) {
    setActiveMinterms(minterms);
  }

  return (
    <div css={css`
      background: ${colors.background};
      height: 100vh;
    `}>
      <TopBar 
        title={`Karnaugh Map`}
        subtitle={`${varNumPage} Variables`}  
      />
      <TableContainer />
      <BottomBar 
        onMintermInput={onMintermInput}
        onPanelClick={handlePanelClick} 
        activeButton={varNumPage}
      />
    </div>
  );
}

export default App;
