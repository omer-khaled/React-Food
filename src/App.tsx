import React from 'react';
import Header from './components/Header';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="App d-flex flex-column vh-100">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
