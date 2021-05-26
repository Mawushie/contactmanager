import logo from './logo.svg';
import './App.css';
import AddContact from './components/AddContact';
import ContactsLists from './components/ContactsLists';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contactslist:[] 
    }

  }

  // addContact = (contact) => {
  //   contact.id = 100 * Math.random() * 100000;
  //   this.setState({
  //     contactslist :[...this.state.contactslist, contact] 
  //   })
   
  // }

  deleteContact = (id) =>{
    this.setState({
      contactslist : this.state.contactslist.filter(contact => contact.id !==id) //show the state of the contacts to display all the others except 
      //the one that matches the ID i want to delete
 
    })
   }

   //goes through the contacts array and finds the one with the ID we wanna delete
   //and returns the new information entered
   
   updateContact = (id,updatedContactInfo) =>{
      let newContacts= this.state.contactslist.map((contact) => {
       if(contact.id === id){
         return updatedContactInfo;
       }
       return contact;
     })
     this.setState({
       contactslist: newContacts
     })
   }

  render(){
    return (
      <div>
        <div className="row title">
          <h4>Contact Manager</h4>
        </div>
          <div className = "row">
          <div className = "col-md-5 userinput">
            <AddContact addContact = {this.addContact} />
          </div>
          
          <div className = "col-md-7 userlist">
          <ContactsLists
            contactslist = {this.state.contactslist} 
            deleteContact = {this.deleteContact} 
            updateContact = {this.updateContact} />  
          </div>
          
        </div>
      </div>
    );

}
}
export default App;
