import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter'

import WithTheme from '../hoc/withTheme'

import { Toast } from "toaster-js"
import "toaster-js/default.css";

class Body extends Component{

  state = {
    contacts: [
        {name: 'Rosie Simpson', number: '459-12-56'},
        {name: 'Hermione Kline', number: '443-89-12'},
        {name: 'Eden Clements', number: '645-17-79'},
        {name: 'Annie Copeland', number: '227-91-26'},
      ],
    filter:'',
  };
  addContact = (name, number) =>{
    
    const contact = {
      name,
      number,
    }

    const nameExist = this.state.contacts.map(conatct => conatct.name).includes(name);

    this.setState(prevState =>{
      if(nameExist){
        new Toast(`${name} is already in contacts`, Toast.TYPE_ERROR, Toast.TIME_NORMAL);
      }else{
        return{
          contacts: [...prevState.contacts,contact],
        }
      }

    })
  };

  componentDidMount(){
    console.log('Contacts componentDidMount')
    this.localStoreg();
  }

  localStoreg(){
    const persistedTask = localStorage.getItem('contacts');

    if(persistedTask){
      this.setState({
        contacts: JSON.parse(persistedTask)
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Contacts componentDidUpdate');

    console.log('prevState: ', prevState);
    console.log('this.state: ', this.state);

    if(prevState.contacts !== this.state.contacts)
    {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  removeContact = contactId => {
    this.setState(prevState => {
      return{
        contacts: prevState.contacts.filter(({id}) => id !== contactId),
      }
    })
  }
    handleSubmit = e =>{
        e.preventDefault();

        if(this.state.name === '' || this.state.number === ''){
            new Toast("Не введено имя, или номер телефона!", Toast.TYPE_ERROR, Toast.TIME_NORMAL);    
        }
        else{
            this.props.onAddContact(this.state.name, this.state.number);
        }

        this.setState({name:'', number:''});
    }
  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
  }

  render() {
    const {filter} = this.state;

    const visibleContacts = this.getVisibleContacts();

    const theme = this.props.theme;

    return (
        <div className="main" style={{color: theme.config.fontColor, background: theme.config.bodybg}} >
            
            <h2>ContactForm</h2>
            <ContactForm onAddContact={this.addContact} />
        
            <h2>Contacts</h2>
            <Filter 
            value={filter} 
            onChangeFilter={this.changeFilter}
            />

            {visibleContacts.length > 0 && 
            <ContactList 
            contacts={visibleContacts} 
            onRemoveContact={this.removeContact} 
            />}
        </div>
    )
  };
}

export default WithTheme(Body);