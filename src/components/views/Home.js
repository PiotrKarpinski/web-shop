import React from 'react';
import Product from './Product';
import styles from './Home.module.css';
import axios from "axios";
import { connect } from 'react-redux';

class Home extends React.Component {



  render()


	{  

console.log(this.props.products)

    return (
      <section className={styles.component}>
            <div className={styles.list}>
              {this.props.products.map(p => <Product id={p.id} key={p.id} image={p.imageUrl} name={p.name} price={p.price} oldPrice={p.oldPrice} options={p.options}/>)}
             </div> 
      </section>
    );
  }
}

const mapStateToProps = (state)=>{
return {
    products: state.products
     }
}

export default connect(mapStateToProps)(Home);