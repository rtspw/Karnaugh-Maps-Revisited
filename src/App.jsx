import React, { useState, useEffect } from 'react';

import MapPanel from './components/MapPanel.jsx';
import Layout from './components/Layout.jsx';

import { jsx, css } from '@emotion/core';
/** @jsx jsx */



function App() {
  const [varNumPage, setVarNumPage] = useState(2);
  
  useEffect(() => {
    document.title = `${varNumPage} Variable K-Map Visual`;
  });

  function handleClick(varNum) {
    setVarNumPage(varNum);
    console.log(this);
  }

  return (
    <>
      <MapPanel onClick={handleClick}/>
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
