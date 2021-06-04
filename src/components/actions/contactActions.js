export function addContact(newContact){
    return{
        type: 'ADD_CONTACT',
        payload: newContact
    }
}

export function editContactAction (id, updatedContact){
    return{
    type: 'EDIT_CONTACT',
    payload: {
        id: id,
        updatedContactInfo : updatedContact
    }
    }
}

export function deleteContactAction(id){
    return{
        type: 'DELETE_CONTACT',
        payload: id
    }
}