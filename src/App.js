import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
