const initialState = [
    {
        id:0,
        name: "Raman Kumar",
        number: 9876543210,
        email: "raman@gmail.com",
    },
    {
        id:1,
        name: "Ram Kumar",
        number: 8876543210,
        email: "ram@gmail.com",
    },
]

const ContactReducer = (state = initialState, action) => {
        switch (action.type) {
            case "ADD_CONTACT" :
                state = [...state, action.payload];
                return state;
            case "UPDATE_CONTACT" :
                const updateState = state.map(contact=> contact.id === action.payload.id? action.payload: contact)
                state = updateState;
                return state;
            case "DELETE_CONTACT" :
                const filterContacts = state.filter(contact=> contact.id !==  action.payload && contact)
                state = filterContacts;
                return state;
            default:
                return state;
        }
}

export default ContactReducer