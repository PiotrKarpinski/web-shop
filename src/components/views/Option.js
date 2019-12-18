import React from 'react';
import styles from './Product.module.css';



function Option(props) {

  return (
    <div className={styles.component}>

        <h5>{props.name}:</h5>
        <ul>
            {props.values.map(v => <li key={v.id} ><input onChange={e => props.handleChange(e.target)} data-price={v.priceModifier} type="radio" name={props.productName + '_'+ props.name} value={v.name}/>{v.name}</li>)}
         </ul>
    </div>

  );
}

export default Option;
