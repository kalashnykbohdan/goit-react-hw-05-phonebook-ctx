import React from 'react';
import style from'./contactList.module.css';

const ContactList = ({contacts, onRemoveContact}) =>(
  <ul>
    {contacts.map(({id, name, number}) => 
    
      <li key={name}>
        <span>{name} : {number}</span>
        <button type="button" className={style.BthDelete} onClick={() => onRemoveContact(id)}>Delete</button>
      </li>
    )}
  </ul>
);
export default ContactList;