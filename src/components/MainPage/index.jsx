import React, { Component } from 'react';
import styles from './Main.module.css';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import SoldItem from './SoldItemCard/index.jsx';

import banans from '../img/icons/banans-1400x1400.png'
import apples from '../img/icons/apples.png'
import papajja from '../img/icons/papajja.png'

class MainPage extends Component {
  render() {
    return (<>
      <Header amount={this.props.amount} price={this.props.price}/>
        <div className={styles.main_wrapper}>
          <div className={styles.content}>
            <SoldItem addAmount={this.props.addAmount} subAmount={this.props.subAmount} img={banans} price={10} discount={null} name='Бананы'/>
            <SoldItem addAmount={this.props.addAmount} subAmount={this.props.subAmount} img={apples} price={8} discount={null} name='Яблоки'/>
            <SoldItem addAmount={this.props.addAmount} subAmount={this.props.subAmount} img={papajja} price={10} discount={{percent:16.67,x:3}} name='Папая'/>
          </div>
        </div>
      <Footer/>
      </>
    );
  }
}

export default MainPage;