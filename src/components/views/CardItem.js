import React from 'react';
import styles from './Card.module.scss';
import Button from '@material-ui/core/Button';
import Icon from '../common/Icon.js';
import { connect } from 'react-redux'
import { createAction_removeFromCard } from '../../redux/cardReducer'


class CardItem extends React.Component {
 
  render() {

  function handleRemove() {
    removeFromCard(id)
    updatePrice(price);
  } 


	const {updatePrice, removeFromCard, image, name, price,id} = this.props


    return (
      <div className={styles.product}>
      <div className={styles.image} style={{ backgroundImage: `url(${image}` }}/>
      <h5>{name}</h5>
      <h5 >$<span className='product-price'>{price}</span></h5>
      <div className={styles.trash}>
      <Button style={{top: 0,padding: 0}} onClick={e => handleRemove()} type='submit'><Icon icon='fa fa-trash'/></Button>
      </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch,product) => ({
    removeFromCard: product => dispatch(createAction_removeFromCard({
        product
    })),
})

export default connect(null,mapDispatchToProps)(CardItem);


