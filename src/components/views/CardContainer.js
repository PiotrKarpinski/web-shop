import React from 'react';
import styles from './Home.module.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class CardContainer extends React.Component {

  render() {
console.log(this.props.card)
    return (

      <section className={styles.component}>
          <div className={styles.list}>
              { 
                this.props.card.map((p,index) => 
      <div key={index} className={styles.product}> 
      <h3>{p.name}</h3>
         <h4>Total cost: {p.price}$</h4>        
         <Button variant='contained' color='secondary' className={styles.submit} type='submit'>Order</Button>

    </div>)}
          </div> 
      </section>


 );}
}

const mapStateToProps = (state)=>{
return {
    card: state.card
     }
}


export default connect(mapStateToProps,null)(CardContainer);