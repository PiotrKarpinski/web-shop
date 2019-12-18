import React from 'react';
import styles from './Product.module.css';
import Option from './Option.js'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { createAction_addToCard } from '../../redux/cardReducer'


class Product extends React.Component {

    render() {

        
        console.log(this.props)
        


        let orderDisplayParams = {}
        let orderIdParams = {}
        function handleChange(option) {

        const priceModifier = option.getAttribute('data-price');
        const optionId = option.getAttribute('data-option');
        const valueId = option.getAttribute('data-value');
        console.log(option)

        orderDisplayParams = {
            ...orderDisplayParams, [option.name] : option.value
           
            }
        orderIdParams = {...orderIdParams, [optionId] : valueId }



        totalPrice = totalPrice+ parseInt(priceModifier);
        console.log(totalPrice)
    }


    function handleSubmit() {
        if (Object.keys(orderDisplayParams).length > 1) {
        console.log(name,orderDisplayParams, price, id)
        let order = {id, name, orderDisplayParams, price, orderIdParams, image}
        addToCard(order);

    } else {
        alert('You have to choose color and capacity')}
    } 

    const {addToCard,name,image,price,oldPrice, options, id} = this.props
    let totalPrice=price;

  return (
    <div className={styles.product}>
        
    	<h3>{name}</h3>
    	<span className={styles.price}><del>{oldPrice}$</del></span>
    	<br />
    	<span className={styles.price} style={{color: 'green'}}>{price}$</span>
    	<br />
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
        <div className={styles.image} style={{ backgroundImage: `url(${image}` }}/>
          </Grid>
          <Grid  className={styles.options} item md={4} xs={12}>
    	 {options.map(o => <div key={o.id} id={o.id} className={styles.component}>

        <h5>{o.name}:</h5>
        <ul>
            {o.values.map(v => <li key={v.id} id={v.id} ><input onChange={e => handleChange(e.target)} data-price={v.priceModifier} type="radio" data-option={o.id} data-value={v.id} name={name+'_'+o.name} value={v.name}/>{v.name}</li>)}
         </ul>
        </div>)}
    	 
         </Grid>
         <br/>
         </Grid>
         <h4>Total cost: {totalPrice}$</h4>        
         <Button variant='contained' color='secondary' className={styles.submit} onClick={e => handleSubmit()} type='submit'>Add to cart!</Button>

    </div>


  );
}
}


const mapDispatchToProps = (dispatch,order) => ({
    addToCard: order => dispatch(createAction_addToCard({
        order
    })),
})


export default connect(null,mapDispatchToProps)(Product);
