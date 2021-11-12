import React, { Component } from 'react';
import styles from './ListItem.module.css'

class ListItem extends Component {
  render() {
    return (
      <li className={styles.list_item}>
        {this.props.children}
      </li>
    );
  }
}

export default ListItem;