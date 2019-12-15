import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import styles from './Footer.module.css'
import Icon from '../common/Icon';


function Footer() {
  return (
    <footer className={styles.component}>
    	<ButtonGroup className={styles.links} variant="text" size="small" aria-label="small contained button group">
              <Button>Terms and conditions</Button>
              <Button>Recruitment</Button>
              <Button>Contact</Button>
            </ButtonGroup>
        <div className={styles.icons}>
        <IconButton>
        <Icon icon='fab fa-facebook'/>
        </IconButton>
        <IconButton> 
        <Icon icon='fab fa-twitter'/>
        </IconButton>
        <IconButton>
        <Icon icon='fab fa-instagram'/>
        </IconButton>

        </div>


    </footer>
  );
}

export default Footer;
