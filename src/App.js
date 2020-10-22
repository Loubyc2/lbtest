import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import ShopApp from './lbShop1/ShopApp';

function App() {
  return (
    <Router>
      <div className="app">
        <ShopApp />
      </div>
    </Router>
  );
}

export default App;
