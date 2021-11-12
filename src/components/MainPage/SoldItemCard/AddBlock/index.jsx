import React, { Component } from 'react';
import styles from './AddBlock.module.css';

const classNames = require('classnames/bind').bind(styles);

class AddBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount:1,
      price:this.props.price,
      totalPrice:this.props.price,
      isToggle:false
    }
  }

  calcDiscount = () => {
    const {discount} = this.props;
    const {amount, price, totalPrice} = this.state;

      if(this.props.discount){
        const discountPrice = ((price * discount.x / 100) * discount.percent) * Math.floor(amount / discount.x);
        return Math.ceil(totalPrice - discountPrice);
      }
      else{
        return this.state.totalPrice;
      }
  }
  
  addItems = (e) => {
    this.setState({
      isToggle:true  
    });
    console.log(this.state.totalPrice);
    this.props.addAmount(this.state.amount, this.props.price);
  }

  increment = (e) => {
    const {amount, totalPrice, price} = this.state;

      this.setState({
        amount: amount + 1,
        totalPrice: totalPrice + price
      },()=>{
        this.props.addAmount(1, this.calcDiscount());
      });
  }

  decrement = (e) => {
    const {amount, totalPrice, price} = this.state;
    
    if(amount - 1 >= 0){
          this.setState({
            amount: amount - 1,
            totalPrice:totalPrice - price
          },()=>{
            this.props.subAmount(1, this.calcDiscount());
          });    
    }
  }

  render() {

    const addContainer = classNames({
      hideElement:this.state.isToggle
    })

    const amountContainer = classNames({
      hideElement:!this.state.isToggle
    })

    return (
      <div className={styles.conteiner}>

        <span className={styles.price}>{`${this.props.price} грн`}</span>

        <div className={addContainer}>
          <button onClick={this.addItems} className={styles.buyBtn}>Купить</button>
        </div>

        <div className={amountContainer}>
          <button onClick={this.increment} className={styles.btn}>+</button>
          <input type="text"  readOnly className={styles.input} value={this.state.amount}/>
          <button onClick={this.decrement} className={styles.btn}>-</button>
        </div>
      </div>
    );
  }
}

export default AddBlock;