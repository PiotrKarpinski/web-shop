import React from 'react';
import Product from './Product';
import styles from './Product.module.css'

function ProductList(props) {
  return (
    <div className={styles.list}>
      {props.products.map(p => <Product key={p.id} name={p.name} price={p.price} oldPrice={p.oldPrice} options={p.options}/>)}
     </div> 
  ); 
} 

export default ProductList;