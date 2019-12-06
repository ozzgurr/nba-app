import React from 'react'
import classes from './SideNavItems.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faPlay, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const SideNavItems = () => {
  return (
    <div>
      <div className={classes.option}>
        <Link to="/" >
        <FontAwesomeIcon icon={faHome} />
          Home</Link>
      </div>
      <div className={classes.option}>
        <Link to="/news" >
        <FontAwesomeIcon icon={faNewspaper} />
          News</Link>
      </div>
      <div className={classes.option}>
        <Link to="/videos" >
        <FontAwesomeIcon icon={faPlay} />
          Videos</Link>
      </div>
      <div className={classes.option}>
        <Link to="/videos" >
        <FontAwesomeIcon icon={faSignInAlt} />
          Sign In</Link>
      </div>
      <div className={classes.option}>
        <Link to="/videos" >
        <FontAwesomeIcon icon={faSignOutAlt} />
          Sign Out</Link>
      </div>
    </div>
  )
}

export default SideNavItems;
