import React from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';

class ContactsLists extends React.Component{
    render(){
        return (
            <div>
                <h3 className = "contacts">Contacts</h3>
                {this.props.contactsData.map((contact) => {
                    return <ContactItem  
                    contact = {contact} key={contact.id} 
                    deleteContact = {this.props.deleteContact}
                    updateContact = {this.props.updateContact}/>;
                })}
            
            </div>
        )
    }
    
}
const mapStateToProps = (state) =>{
    return{
    contactsData : state.contacts
}
}
export default connect(mapStateToProps)(ContactsLists);