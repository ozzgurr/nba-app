import React from 'react';

import SimpleSideNav from 'react-simple-sidenav';

import SideNavItems from './SideNavItems';

const SideNav = (props) => {
  return (
    <div>
      <SimpleSideNav
        showNav={props.showSideNav}
        onHideNav={props.onHideSideNav}
        navStyle= {{
          background: '#242424',
          maxWidth: '220px' 
        }}
      >
        <SideNavItems />
      </SimpleSideNav>
    </div>
  )
}

export default SideNav;
