import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import operations from '..//..//redux/operations'

class Phonebook extends React.Component {
  componentDidMount() {
    this.props.onFatchContact()
  }
  
  render = () => {
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm  />
        <h2>Contacts</h2>

        <Filter />
        
        <ContactList/>
      </div>
  
    )
  }
}
const mapDispatchToProps = dispatch => ({
  onFatchContact: () => dispatch(operations.fatchContact())
});

export default connect(null, mapDispatchToProps)(Phonebook);


// class Phonebook extends React.Component {
//   state = {
//     // contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     // ],
//     // filter: '',
//   };
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.contacts !== prevState.contacts) {
//   //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   //   }
//   // }

//   // componentDidMount() {
//   //   const contacts = localStorage.getItem('contacts');
    
//   //   if (contacts !== null) {
//   //     const parsedContscts = JSON.parse(contacts);
//   //     this.setState({ contacts: parsedContscts });
//   //   }
//   // }

//   // addContact = data => {
//   //   const normalizedData = data.name.toLowerCase();
    
//   //   const iterateName = this.state.contacts.find(contact =>
//   //     contact.name.toLowerCase().includes(normalizedData),
//   //   );
//   //   if (iterateName === undefined) {
//   //     this.setState(prevState => ({
//   //       contacts: [data, ...prevState.contacts],
//   //     }));
//   //   } else {
//   //     return alert(`${iterateName.name} is already in contacts`);
//   //   }
//   // };


//   // deleteContact = contactId => {
//   //   this.setState(prevState => ({
//   //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   //   }));
//   // };
//   // chengeFilter = e => {
//   //   this.setState({ filter: e.currentTarget.value });
//   // };
//   render() {
   
//     return (
//       <div>
//         <h1>Phonebook</h1>

//         <ContactForm  />
//         <h2>Contacts</h2>

//         <Filter />
        
//         <ContactList/>
//       </div>
//     );
//   }
// }