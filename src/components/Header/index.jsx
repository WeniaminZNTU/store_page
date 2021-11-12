import React, { Component } from 'react';
import styles from './Header.module.css';
import ListItem from './ListItem/index.jsx';
import BasketIcon from './BasketIcon';

class Header extends Component {
  render() {
    return (
      <header className={styles.wrapper}>
        <ul className={styles.list_wrapper}>
          <ListItem>Главная страница</ListItem>
          <ListItem>***</ListItem>
          <ListItem><BasketIcon price={this.props.price} amount={this.props.amount}/></ListItem>
        </ul>
      </header>
    );
  }
}

export default Header;