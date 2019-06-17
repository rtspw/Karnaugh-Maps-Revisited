import React, { useState, useEffect } from 'react';

import TopBar from './components/TopBar.jsx';
import BottomBar from './components/BottomBar.jsx';

import { jsx, css } from '@emotion/core';
/** @jsx jsx */



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
    <>
      <TopBar 
        title={`Karnaugh Map`}
        subtitle={`${varNumPage} Variables`}  
      />
      <BottomBar 
        onMintermInput={onMintermInput}
        onPanelClick={handlePanelClick} 
        activeButton={varNumPage}
      />
    </>
  );
}

export default App;
