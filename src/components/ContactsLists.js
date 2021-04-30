import React from 'react';
import ContactItem from './ContactItem';

class ContactsLists extends React.Component{
    render(){
        return (
            <div>
                <h3 className = "contacts">Contacts</h3>
                {this.props.contactslist.map((contact) => {
                    return <ContactItem  
                    contact = {contact} key={contact.id} 
                    deleteContact = {this.props.deleteContact}
                    updateContact = {this.props.updateContact}/>;
                })}
            
            </div>
        )
    }
    //we 
}

export default ContactsLists;