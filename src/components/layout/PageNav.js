import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.scss';
import Icon from '../common/Icon';
import { NavLink } from "react-router-dom";




function PageNav() {


    return (

    <nav className={styles.component}>
    <NavLink style={{textDecoration: 'none'}} to='/'>
    <Button style={{float: 'Left',fontSize: 24+'px'}}>
    <Icon icon='fas fa-home'/>
    </Button>
    </NavLink>
    <NavLink to='/cart'>
    <Button style={{float: 'Right',fontSize: 24+'px'}}>
    <Icon icon='fas fa-shopping-cart'/>
    </Button>
    </NavLink>
    </nav>

  )}




export default PageNav;
