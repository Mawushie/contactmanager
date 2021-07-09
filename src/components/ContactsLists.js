import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { getAllContactsAction } from '../actions/contactActions';
=======
import { getAllContactsAction } from './actions/contactActions';
>>>>>>> 8b4b59f897035402b4c01fd4d9698ebbbf1d824c
import ContactItem from './ContactItem';

class ContactsLists extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){//display all contacts when the component mounts
        this.props.getAllContactsAction()
    }

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

const mapDispatchToProps = {
    getAllContactsAction
}

export default connect(mapStateToProps , mapDispatchToProps)(ContactsLists);