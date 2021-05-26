var initialState = {
    contacts : []
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
           return{
               ...state , contacts : [...state.contacts , action.payload]
           }
            break;
    
        default: 
            return state;
        
    }
}

export default contactReducer;