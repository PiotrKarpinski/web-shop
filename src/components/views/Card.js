import React from 'react';
import styles from './Card.module.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CardItem from './CardItem';
import Grid from '@material-ui/core/Grid';



class Card extends React.Component {
    constructor(props) {
    super(props);
    this.state = {user:{name:'',surname:'',email:'',adress: {street:'',city:'',postcode:''}}}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validate = this.validate.bind(this)
   
    }


    validate(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}


    handleChange(event) {

      switch (event.target.name) {
  case 'email':
    this.validate(event.target.value)
    this.setState({user: {...this.state.user, [event.target.name]: event.target.value}})
    break;
  case 'name':
    this.setState({user: {...this.state.user, [event.target.name]: event.target.value}})
    break;
  case 'surname':
    this.setState({user: {...this.state.user, [event.target.name]: event.target.value}})
    break;
  default:
    this.setState({user: {...this.state.user, adress:{...this.state.user.adress, [event.target.name]: event.target.value}}})

}
}

    handleSubmit(e) {
e.preventDefault()
      if(this.state.user.name.length !== 0 && this.state.user.surname.length !== 0 &&
       this.state.user.email.length !== 0 && this.state.user.adress.city.length !== 0 &&
        this.state.user.adress.street.length !== 0 && this.state.user.adress.houseNumber.length !== 0 && this.state.user.adress.postcode.length !== 0) 
      {
  let products=this.props.card.map(c=>({id:c.id, options:c.orderIdParams,amount:c.fixedPrice})) 

  let order = {
    user:this.state.user,
    products:products
  }
  alert('You have succesfully ordered the items, check your email for further informations.')
  console.log(order)
  }
  else {
    alert('You have to fill all fields to complete the order')
  }

}


  render() {

const {card} = this.props


      if (card.length <= 0) {
        return (
      <section className={styles.emptyCard}>
            <h3 className={styles.title}>Card is empty</h3>         
      </section>
)}
      
      else {

      return ( 
        <section className={styles.component}>
        <h3 className={styles.title}>Your order details:</h3>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>        
          <div className={styles.list}>
      {card.map((p, index )=> 
           <CardItem options={p.orderDisplayParams} key={index} name={p.name} price={p.fixedPrice} image={p.image} />
      )}
      </div>
      </Grid>
      <Grid item md={6} xs={12}>
      <form className={styles.text}>
      <p className={styles.info}>Please, fill in the form to pay for the order</p>
      <input required className={styles.text} type='text' onChange={this.handleChange} name='name' placeholder='First name'/>
      <input required className={styles.text} type='text' onChange={this.handleChange} name='surname' placeholder='Last name'/>
      <input required className={styles.text} type='email' onChange={this.handleChange} name='email' placeholder='An email'/>
      <p className={styles.warning} style={this.validate(this.state.user.email) ? {display: 'none'}:{display:'block'}}>You have entered an invalid email!</p>
      <p>Your home adress:</p>
      <input required className={styles.text} type='text' onChange={this.handleChange} name='street'  placeholder='Street'/>
      <input required className={styles.text} type='text' onChange={this.handleChange} name='houseNumber'  placeholder='House number'/>
      <input required className={styles.text} type='text' onChange={this.handleChange} name='city'  placeholder='City'/>
      <input required className={styles.text} type='text' onChange={this.handleChange} name='postcode'  placeholder='Post code'/>
      <Button style={{margin: '12px auto'}} variant='contained' color='secondary' onClick={e=>this.handleSubmit(e)} type='submit' className={styles.submit}>Order</Button>

      </form>
      </Grid>
        
      </Grid>     
      </section>      
      )
      }
}
}


const mapStateToProps = (state)=>{
return {
    card: state.card
     }
}



export default connect(mapStateToProps,null)(Card);