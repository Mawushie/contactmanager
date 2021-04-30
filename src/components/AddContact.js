import React, { Component } from 'react'
import ReactDOM from 'react'

class AddContact extends Component {
    constructor(props){
        super(props)

        this.state = {
            contactname : "",
            phonenumber : "",
            location : ""
        };
    }
    handleOnChange = (event) =>{
        this.setState(
            { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        this.props.addContact(this.state);
        //this clears whatever was typed initially into the form;basically resetting the form
        this.setState({
            contactname : "",
            phonenumber : "",
            location : ""
        })
    }

    
    render() {
        return (
            <div>
                <form>
                    <h4>Add New Contact</h4>
                    <label>Name</label> <br></br>
                    <input type = "text" name = "contactname" value = {this.state.contactname} onChange = {this.handleOnChange}></input> <br></br>
                    <br></br>

                    <label>Phone Number</label> <br></br>
                    <input type = "number" name = "phonenumber" value = {this.state.phonenumber} onChange = {this.handleOnChange} ></input> <br></br>
                    <br></br>
                    
                    <label>Location</label> <br></br>
                    <input type = "text" name = "location" value = {this.state.location} onChange = {this.handleOnChange}></input> <br></br>

                    <br></br>

                    <button type="button" onClick = {this.handleSubmit} >Add </button>
                   
            
                </form>
            </div>
        )
    }
}

export default AddContact;
