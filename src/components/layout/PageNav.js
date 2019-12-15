import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.css';
import Icon from '../common/Icon';


function PageNav() {



  return (
    <nav className={styles.component}>
    <div className={styles.logo}>
    <Icon  icon='fas fa-dice-d20'/>
    </div>
    <Button variant='contained' color='default'>
    Home
    </Button>
    <Button style={{float: 'Right'}}variant='contained' color='default' className={styles.shoppingCart}>
    <Icon icon='fas fa-shopping-cart'/>
    </Button>
    </nav>
  );
}

export default PageNav;
