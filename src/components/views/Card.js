import React from 'react';
import styles from './Card.module.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CardItem from './CardItem';



class Card extends React.Component {

  render() {
const {card} = this.props


console.log(card)
      if (card.length <= 0) {
        return (
      <section className={styles.component}>
          <div className={styles.list}>
            <h3>You didn't add any product</h3>         
          </div>     
      </section>
)}
      
      else {

      return ( 
        <section className={styles.component}>
          <div className={styles.list}>
      {card.map((p, index )=> 
           <CardItem key={index} name={p.name} price={p.price} image={p.image} />
      )}

      <Button variant='contained' color='secondary' className={styles.submit} type='submit'>Order</Button>
        </div>     
      </section>      
      )
      }
}
}

const mapStateToProps = (state)=>{
return {
    card: state.card
     }
}


export default connect(mapStateToProps,null)(Card);