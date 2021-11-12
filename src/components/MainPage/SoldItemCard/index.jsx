import React, { Component } from 'react';
import styles from './SoldItem.module.css';
import Discount from './Discount/index.jsx';
// import basket from '../../img/icons/basket-30.png';
import AddBlock from './AddBlock';

class SoldItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      discount: this.props.discount,
      price: Number(this.props.price)
    }
  }


  render() {
      const discount = this.state.discount ?
        <Discount>{this.props.discount}</Discount>
        : null;
      
    return (
      <div className={styles.sold_item_wrapper}>
        <h3>{this.props.name}</h3>
        <div className={styles.image_wrapper}>
          <img src={this.props.img} alt="item img" className={styles.img_wrapper} />
          {discount}
        </div>

        <AddBlock addAmount={this.props.addAmount} subAmount={this.props.subAmount} discount={this.props.discount} price={this.state.price}/>
      </div>
    );
  }
}

export default SoldItem;