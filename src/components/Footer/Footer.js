import React from 'react';
import classes from './Footer.css';

import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Link to="/" className={classes.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
      <div className={classes.right}>
        @NBA {CURRENT_YEAR} All rights reserved
      </div>
    </div>
  )
}

export default Footer;