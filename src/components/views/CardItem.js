import React from 'react';
import styles from './Card.module.css';

class CardItem extends React.Component {
 
  render()
	{  

	const {image, name, price} = this.props

    return (
      <div className={styles.component}>
        <h3>{name}</h3>
      <div className={styles.image} style={{ backgroundImage: `url(${image}` }}/>
      <h4>Total cost: {price}$</h4>
      </div>
    );
  }
}

export default CardItem;