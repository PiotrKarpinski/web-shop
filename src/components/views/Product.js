import React from 'react';
import styles from './Product.module.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { createAction_addToCard } from '../../redux/cardReducer'



let orderParams={}
let fixedPrice

class Product extends React.Component {
    constructor(props) {
    super(props);
    this.state = {fixedPrice: this.props.price}
    this.handleChange = this.handleChange.bind(this)
    this.totalIt = this.totalIt.bind(this)

    }

    totalIt() {
  var id = this.props.id    
  var input = document.getElementsByName("product_"+id+"_option");
  var total = this.props.price;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {

    console.log(id)

      total += parseFloat(input[i].value);
    }
  }
  document.getElementById(id).innerHTML = "Total cost: $" + total.toFixed(2);

  this.setState({fixedPrice: total.toFixed(2)})
  return total.toFixed(2)

}

     handleChange(option) {
        const optionName = option.getAttribute('data-option'); 
        const optionValue = option.getAttribute('data-value'); 
          
        orderParams ={...orderParams,[optionValue]:true}  
        fixedPrice = this.totalIt()
    }

    render() {
        


    function handleSubmit() {
      let product = {id, name, image, fixedPrice, orderParams}
      addToCard(product);
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
        <div className={styles.image} style={{ backgroundImage: `url(${image}` }}/>
          <div className={styles.options}>
    	 {options.map(o => <div key={o.id} id={o.id} className={styles.component}>

        <h5>{o.name}:</h5>
            {o.values.map(v => <label key={v.id} id={v.id}  className={styles.value}>{v.name}
                               <input type="checkbox" onChange={e => this.handleChange(e.target)} data-option={o.name} data-value={v.name} name={'product_'+this.props.id+'_option'} value={v.priceModifier}/>
                               <span className={styles.checkmark}></span>
                               </label>
                               )}
        </div>)}
    	 
         <br/>

         <h4 id={this.props.id} className={styles.price}>Total cost: ${this.state.fixedPrice}</h4>
         <Button variant='contained' color='secondary' style={{padding: 24+'px'}} className={styles.submit} onClick={e => handleSubmit()} type='submit'>Add to cart!</Button>

    </div>
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
