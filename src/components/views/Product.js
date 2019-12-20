import React from 'react';
import styles from './Product.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { createAction_addToCard } from '../../redux/cardReducer'

        let orderDisplayParams = {}
        let orderIdParams = []
        let fixedPriceObject = {Color:0, Capacity:0}


class Product extends React.Component {
    constructor(props) {
    super(props);
    this.state = {fixedPrice: this.props.price}
    this.handleChange = this.handleChange.bind(this)

    }

     handleChange(option) {


        const priceModifier = option.getAttribute('data-price');
        const optionId = option.getAttribute('data-option-id');
        const valueId = option.getAttribute('data-value-id');
        const optionName = option.getAttribute('data-name');
       
        fixedPriceObject = {...fixedPriceObject, [optionName] : priceModifier}
        this.setState({fixedPrice: this.props.price + parseInt(fixedPriceObject.Color) + parseInt(fixedPriceObject.Capacity)})

        orderDisplayParams = {...orderDisplayParams, [optionName] : option.value}
        
        orderIdParams = {...orderIdParams,[optionId]:valueId}


    }

    render() {
        


    function handleSubmit() {
        if (Object.keys(orderIdParams).length > 1) {
        let product = {id, name, orderDisplayParams,fixedPrice, orderIdParams, image}
        addToCard(product);
    } else {
        alert('You have to choose color and capacity')}
    } 

        
       
    const {addToCard,name,image,price,oldPrice, options, id} = this.props
    const {fixedPrice} = this.state;
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
            {o.values.map(v => <li key={v.id} id={v.id} ><input onChange={e => this.handleChange(e.target)} data-price={v.priceModifier} type="radio" data-option-id={o.id} data-value-id={v.id} data-name={o.name} name={name+'_'+o.name} value={v.name}/>{v.name}</li>)}
         </ul>
        </div>)}
    	 
         </Grid>
         <br/>
         </Grid>
         <h4>Total cost: {this.state.fixedPrice}$</h4>
         <Button variant='contained' color='secondary' className={styles.submit} onClick={e => handleSubmit()} type='submit'>Add to cart!</Button>

    </div>


  );
}
}


const mapDispatchToProps = (dispatch,product) => ({
    addToCard: product => dispatch(createAction_addToCard({
        ...product
    })),
})


export default connect(null,mapDispatchToProps)(Product);
