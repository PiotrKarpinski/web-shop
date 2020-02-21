import React from 'react';
import styles from './Card.module.scss';
import Grid from '@material-ui/core/Grid';

class CardItem extends React.Component {
 
  render()
	{  
	const {image, name, price} = this.props


    return (
      <div className={styles.product}>
      <div className={styles.image} style={{ backgroundImage: `url(${image}` }}/>
      <h5>{name}</h5>
      <h5 >$<span className='product-price'>{price}</span></h5>
      </div>
    );
  }
}

export default CardItem;