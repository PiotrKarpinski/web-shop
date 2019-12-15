import React from 'react';
import ProductList from './ProductList';
import styles from './Home.module.css';
import axios from "axios";

class Home extends React.Component {

  // default State object
  state = {
    products: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/products')
      .then(response => {

        // create an array of contacts only with relevant data
        const newProducts = response.data.map(p => {
          return {
            id: p.id,
            name: p.name,
            price: p.price,
            oldPrice: p.oldPrice,
            options: p.options
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          products: newProducts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  render()
	{  

	console.log(this.state.products)

    return (
      <section className={styles.component}>
        
        <ProductList products={this.state.products} />
      </section>
    );
  }
}

export default Home;