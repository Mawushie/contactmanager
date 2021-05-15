var initialState = {
    contacts : [{
        Name: "Mawushie", 
        Location: "Tse Addo",
        Number: "0240000000"
    }
]
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add_Contact":
            
            break;
    
        default: 
            return state;
        
    }
}

export default contactReducer;