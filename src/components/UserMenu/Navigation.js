import React from 'react';
import { NavLink } from "react-router-dom";
import authSelectors from '..//../redux/auth/auth-selectors'
import { connect } from 'react-redux';
const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};
//{isAuthenticated}
const Navigation = ({isAuthenticated}) => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

    {isAuthenticated &&
      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
    </NavLink>}
    
  </nav>
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})
//export default Navigation;
export default connect(mapStateToProps)(Navigation);
