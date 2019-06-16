import React, { useState, useEffect } from 'react';

import MapPanel from './components/MapPanel.jsx';
import MintermInput from './components/MintermInput.jsx';
import Layout from './components/Layout.jsx';

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
      <MapPanel onClick={handleClick} />
      <MintermInput onMintermInput={onMintermInput} />
      <Layout 
        title={`Karnaugh Map`}
        subtitle={`${varNumPage} Variable`}  
      >
        <h>Test text</h>
      </Layout>
    </>
  );
}

export default App;
