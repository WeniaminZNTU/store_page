import React, { Component } from 'react';
import styles from './Discount.module.css';

class discount extends Component {
  render() {
    return (
      <>
        <span className={styles.amount}>{`x ${this.props.children.x}`}</span>
        <div className={styles.discount}>
          {`-${Math.ceil(this.props.children.percent)}%`}
        </div>
      </>
    );
  }
}

export default discount;