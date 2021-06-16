import React from 'react';
import { connect } from 'react-redux'
import operations from '..//../redux/phonebook/operations'
// import shortid from 'shortid';
import styles from '../ContactForm/contactForm.module.css';

class ContactForm extends React.Component {
  state = {
    // id: '',
    name: '',
    number: '',
  };
  handleChenge = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value,  });
  };
  //id: shortid.generate()
  handleInputChange = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', id: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className={styles.ContactForm} onSubmit={this.handleInputChange}>
          <label>
            Name
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChenge}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </label>
          <label>
            Number
            <input
              className={styles.inputForm}
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChenge}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(operations.addContact(data))
})
export default connect(null, mapDispatchToProps)(ContactForm);
