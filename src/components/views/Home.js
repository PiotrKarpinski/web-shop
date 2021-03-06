import React from 'react';
import Product from './Product';
import styles from './Home.module.scss';
import { connect } from 'react-redux';

class Home extends React.Component {



  render()


	{  


    return (
      <section className={styles.component}>
      <h2 className={styles.title}>Menu</h2>
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