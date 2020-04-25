import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Details from './components/Details';
import ProductProvider from './context';

export default function App() {
  return (
      <ProductProvider>
        <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        <Footer />
      </ProductProvider>
  );
}

/*
*-----------*
* ---BUGS---*
*-----------*
total decimal incorrect
footer doens't sits well on bottom
disable cart button ain't working
*/