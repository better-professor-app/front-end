import axios from 'axios'
import { axiosWithAuth } from '../utilities/axiosWithAuth'


export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (history, credentials) => dispatch => {
    console.log(credentials)
    dispatch({
        type: REGISTER_START
    });
    axios
        .post(`https://better-prof-app.herokuapp.com/api/professors/register`, credentials)
        .then(response => {
            console.log(response)
            dispatch({
                type: REGISTER_SUCCESS
            })
            history.push("/")
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: REGISTER_FAILURE,
                payload: 'Error registering user. Please try again.'
            })
        })
}

export const FETCH_REMINDERS_START = "FETCH_REMINDERS_START";
export const FETCH_REMINDERS_SUCCESS = "FETCH_REMINDERS_SUCCESS";
export const FETCH_REMINDERS_FAILURE = "FETCH_REMINDERS_FAILURE";

export const getReminders =() => dispatch => {
    dispatch({
        type: FETCH_REMINDERS_START
    });
    axios
        .get(`https://better-prof-app.herokuapp.com/api/reminders`)
        .then(res => {
            dispatch({
                type: FETCH_REMINDERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_REMINDERS_FAILURE,
                payload: err.response
            })
        })
}

export const ADD_REMINDERS = "ADD_REMINDERS";

export const addReminders = ({message, date, time }) => {

    return dispatch => {
        axios
            .post(`https://better-prof-app.herokuapp.com/api/reminders`, {message, date, time})
            .then(res => {
                console.log('addRes',res)
                const id = res.data.id
                let payload = {message: message, date: date, time: time, id: id}
                // payload.id = id
                dispatch({
                    type: ADD_REMINDERS,
                    payload: payload
                })
            })
    }
}

export const EDIT_REMINDERS = "EDIT_REMINDERS";

export const DELETE_REMINDERS = "DELETE_REMINDERS";

export const deleteReminder = id => dispatch => {
    console.log('id',id)
    axios
    .delete(`https://better-prof-app.herokuapp.com/api/reminders/${id}`)
    .then(res => {
        console.log('delete', res)
        dispatch({ type: DELETE_REMINDERS, payload: id})
    })
}


