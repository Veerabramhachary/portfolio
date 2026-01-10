import type { FormContextType } from "./FormContext";

export const initialState: FormContextType['state'] = {
    name : "",
    email: "",
    subject:"",
    message :"",
    isSubmitting: false
}

type Action = 
| { type: 'UPDATE_FIELD'; payload: {name: string; value: string}}
| { type: 'START_SUBMIT' }
| { type: 'END_SUBMIT' }
| { type: 'RESET_FORM' }

export const formReducer = (state: FormContextType['state'], action: Action) =>{
    switch(action.type) {
        case "UPDATE_FIELD" : {
            const {name, value} = action.payload;
            return {
                ...state,
                [name]: value,
            };
        }
        case "START_SUBMIT" :
            return {...state, isSubmitting : true};

        case "END_SUBMIT":
            return {...state, isSubmitting : false};

        case "RESET_FORM" :
            return initialState;

        default:
            return state;
    }
}