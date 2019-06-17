import React, { useState, useEffect } from 'react';

import Layout from './components/Layout.jsx';
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

  function handleClick(varNum) {
    setVarNumPage(varNum);
  }

  function onMintermInput(minterms) {
    setActiveMinterms(minterms);
  }

  return (
    <>
      <Layout 
        title={`Karnaugh Map`}
        subtitle={`${varNumPage} Variables`}  
      >
      </Layout>
      <BottomBar 
        onMintermInput={onMintermInput}
        onPanelClick={handleClick} 
        activeButton={varNumPage}
      />
    </>
  );
}

export default App;
