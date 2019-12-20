import React from 'react';
import styles from './Card.module.css';
import Grid from '@material-ui/core/Grid';

class CardItem extends React.Component {
 
  render()
	{  
	const {image, name, price, options} = this.props


    return (
      <div className={styles.product}>
      <Grid container spacing={4}>
      <Grid item md={6} xs={4}>
      <div className={styles.image} style={{ backgroundImage: `url(${image}` }}/>
      </Grid>
      <Grid item md={6} xs={8}>

      <ul className={styles.info}>
      	<li> Product: {name}</li>
        <li> Color: {options.Color}</li>
		<li> Capacity: {options.Capacity}</li>
        <li className= {styles.price}>Price: {price}$</li>
        </ul>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default CardItem;