import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';


function App() {
  return (
    <BrowserRouter>
      {/* <Header user={user}/> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
