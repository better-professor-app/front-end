import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_REMINDERS_START,
    FETCH_REMINDERS_SUCCESS,
    FETCH_REMINDERS_FAILURE,
    ADD_REMINDERS,
    EDIT_REMINDERS,
    DELETE_REMINDERS
} from '../actions'

export const initialState = {
    reminders: [],
    isRemindersLoading: true,
    isRegistering: false,
    isRegisterd: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return{
                ...state,
                isRegistering: true,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isRegisterd: true,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                error: action.payload
            }
           case FETCH_REMINDERS_START:
               return {
                   ...state,
                   isRemindersLoading: true,
                   error: ""
               }
            case FETCH_REMINDERS_SUCCESS:
                return {
                    ...state,
                    isRemindersLoading: false,
                    reminders: action.payload
                }
            case FETCH_REMINDERS_FAILURE:
                return {
                    ...state,
                    isRemindersLoading: false,
                    error: "The API is down. Please try again later"
                }
            case ADD_REMINDERS:
                return {
                    ...state,
                    isRemindersLoading: false,
                    reminders: [...state.reminders, action.payload],
                }
            
        default:
            return state;
    }
}

    