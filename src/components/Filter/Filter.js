import React from 'react';
import { connect } from 'react-redux';
import styles from '../Filter/filter.module.css';
import {chengeFilter} from '..//../redux/phonebook/actions'
import PropTypes from 'prop-types';
import {getFilter} from '../../redux/phonebook/selectors'

const Filter = ({ filter, handleChenge }) => (
  <label>
    Find contacts by name
    <input
      className={styles.inputFilter}
      type="text"
      // name="name"
      value={filter}
      onChange={handleChenge}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
    />
  </label>
);
Filter.propTypes = {
  filter: PropTypes.string,
    handleChenge: PropTypes.func,
};
 
const mapStateToProps = state => ({
  filter: getFilter(state),

});
const mapDispatchToProps = dispatch => ({
  handleChenge: (e) => dispatch(chengeFilter(e.currentTarget.value)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
