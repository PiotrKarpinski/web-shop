import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.css';
import Icon from '../common/Icon';
import { NavLink } from "react-router-dom";




function PageNav() {


    return (

    <nav className={styles.component}>
    <div className={styles.logo}>
    <Icon  icon='fas fa-dice-d20'/>
    </div>
    <NavLink style={{textDecoration: 'none'}} to='/'>
    <Button variant='contained' color='default'>
    Home
    </Button>
    </NavLink>
    <NavLink to='/cart'>
    <Button style={{float: 'Right'}}variant='contained'color='default'>
    <Icon icon='fas fa-shopping-cart'/>
    </Button>
    </NavLink>
    </nav>

  )};




export default PageNav;
