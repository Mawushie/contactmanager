import AddContact from '../components/AddContact';
import ContactsLists from '../components/ContactsLists';
import React from 'react';

class Dashboard extends React.Component{
 
  render(){
    return (
      <div>
        <div className="row title">
          <h4>Contact Manager</h4>
        </div>
          
        <div className = "row">
          <div className = "col-md-5 userinput">
            <AddContact/>
          </div>
          
          <div className = "col-md-7 userlist">
            <ContactsLists/>  
          </div>
          
        </div>
      </div>
    );

}
}
export default Dashboard;
