import React from 'react';
import styles from './Header.module.css';


function Header() {
  return (
    <header className={styles.background}>
    <h1 className={styles.title}>DICE</h1>
    <h2 className={styles.subtitle}><i>'Give yourself a gift:<br/> the present moment'</i><br/><span style={{color: '#fff'}}>Marcus Aurelius</span></h2> 
    </header>
  );
}

export default Header;
