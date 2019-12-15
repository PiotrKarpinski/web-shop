import React from 'react';
import styles from './Product.module.css';
import Option from './Option.js'



function Product(props) {

let params = {}

    function handleChange(option) {

    	console.log(option)
        params = {
            ...params, [option.name] : option.value
            
            }
        

        console.log(params)

    }
    function handleSubmit() {
        if (Object.keys(params).length > 1) {
        console.log(props.name,params,props.price)
    } else {
        alert('You have to choose color and capacity')}
    }    

  return (
    <div className={styles.product}>
    	<h3>{props.name}</h3>
    	<span className={styles.price}><del>{props.oldPrice}$</del></span>
    	<br />
    	<span className={styles.price}>{props.price}$</span>
    	<br />
    	You save:<span className={styles.price} style={{color: 'green'}}> {props.oldPrice - props.price}$</span>
    	 {props.options.map(o => <Option handleChange={handleChange} key={o.id} name={o.name} values={o.values} productName={props.name}/>)}
    	 <h4>Total cost: {props.price}$</h4>
    	 <button className={styles.submit} onClick={handleSubmit} type='submit'>Add to cart!</button>

    </div>
  );
}

export default Product;
