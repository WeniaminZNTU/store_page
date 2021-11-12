import React, { Component } from 'react';
import styles from './BasketIcon.module.css';
import basketIcon from '../../img/icons/basket-60.png';

class BasketIcon extends Component {
  render() {
    return (
      <div className={styles.basket_icon_wrapper}>
            <img className={styles.basket_png} src={basketIcon} alt='basket icon'/>
            <div className={styles.amount_icon}>{this.props.amount}</div>
            <span className={styles.price_icon}>{`${Math.round(this.props.price)} грн`}</span>
      </div>
    );
  }
}

export default BasketIcon;