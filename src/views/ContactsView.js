
import React, { Component } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import operations from '../redux/phonebook/operations'
import { connect } from 'react-redux';


class ContactsView extends Component {
  componentDidMount() {
    this.props.onFatchContacts();
  }
  render() {
    // const { isError } = this.props;
    return (
      <>
        <h2>Phonebook</h2>
         <ContactForm />

        <Filter />
        {/* {this.props.isLoadingContacts && (
          <SpinnerComponent loading={true} position="global" />
        )} */}
         <h2>Contacts</h2>
          {/* {isError && <h2>{isError}</h2>} */}
        <ContactList />


      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onFatchContacts: () => dispatch(operations.fatchContact())
});

export default connect(null, mapDispatchToProps)(ContactsView);
