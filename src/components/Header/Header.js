import React from 'react';
import classes from './Header.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SideNav from './SideNav/SideNav'

const Header = (props) => {

  const sideNav = () => {
    return(
      <div className={classes.bars}>
        <FontAwesomeIcon icon={faBars} 
          onClick={props.onOpenSideNav}
          style={{
              color: '#dfdfdf',
              padding: '10px',
              cursor: 'pointer'
          }} 
        />
      </div>
    )
  }

  const logo = () => {
    return(
      <Link to="/" className={classes.logo}>
        <img alt="nba-logo" src="/images/nba_logo.png" /> 
      </Link>
    )
  }
  return (
    <header className={classes.header}>
      <div className={classes.headerOpt}>
        <SideNav {...props}/>
        {sideNav()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;