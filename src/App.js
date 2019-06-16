import React from 'react';

import MapPanel from './components/MapPanel';

import { jsx, css } from '@emotion/core';
/** @jsx jsx */

function App() {
  return (
    <>
      <MapPanel onClick={() => { console.log(this) }}/>
      <h1>Karnaugh Maps</h1>
      <h>Test text</h>
    </>
  );
}

export default App;
