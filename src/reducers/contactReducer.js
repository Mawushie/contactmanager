var initialState = {
    contacts : []
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "ADD_CONTACT":
        //    return{
        //        ...state , contacts : [...state.contacts , action.payload]
        //    }
        
        case "GET_ALL_CONTACTS":
        let contactsfromdb = action.payload//payload contains the data that is in the db
        return {
            contacts : contactsfromdb
        }

        // case "EDIT_CONTACT":
        //     var id = action.payload.id;
        //     let updatedContactInfo = action.payload.updatedContactInfo;
        //     let contactsAfterUpdate = state.contacts.map((contact) => {
        //       if (contact.id === id) {
        //         return updatedContactInfo;
        //       }
        //       return contact;
        //     });
        //     return { contacts: contactsAfterUpdate };
        
        // case "DELETE_CONTACT":
        //     var id = action.payload;
        //     let contactsAfterDelete = state.contacts.filter((contact) => contact.id !== id);
        //     return { contacts: contactsAfterDelete };
            
        default: 
            return state;
        
    }
}

export default contactReducer;