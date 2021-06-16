import { connect } from "react-redux";
import authSelectors from '..//../redux/auth/auth-selectors';
import authOperations from '..//../redux/auth/auth-operations'

const styles = {
  container: {
    display: "flex",
    alignItems: 'center',
    //justifyContent: "spaceBetween",
  },
  email: {
    //display: 'block',
    fontWeight: 700,
    marginRight: 10,

  },
};

const UserMenu = ({ email, onLogout, }) => (
  <div style={styles.container}>
    <span style={styles.email}>{email}</span>
    <button type='button' onClick={onLogout}>Logout</button>
  </div>
);
const mapStateToProps = (state) => ({
  email: authSelectors.getCurrentEmail(state)
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);