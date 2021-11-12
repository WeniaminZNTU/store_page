import React, { Component } from 'react';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';

class Basket extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>This is Basket page</h1>
        <Footer/>
      </div>
    );
  }
}

export default Basket;