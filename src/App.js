import React, { useState, useEffect } from 'react';

import MapPanel from './components/MapPanel';

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
      <h1>Karnaugh Maps</h1>
      <h>Test text</h>
    </>
  );
}

export default App;
