import React from 'react';
import styles from './Header.module.scss';


function Header() {
  return (
    <header className={styles.background}>
    <div className={styles.header}>
    <h1 className={styles.title}>Green Oak Tavern</h1>
    <h2 className={styles.subtitle}><i>“Good food ends with good talk.”</i><span style={{color: '#6FA86F'}}><br/>– Geoffrey Neighor</span></h2> 
    </div>
    </header>
  );
}

export default Header;
