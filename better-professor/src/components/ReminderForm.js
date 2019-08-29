import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { addReminders } from '../actions'
import './reminder.css'


const ReminderForm = props => {
    const [addForm, setForm] = useState({
            message: '',
            date: '',
            time: ''
    })

    
    const handleInputChange = event => {
        setForm({...addForm, [event.target.name]: event.target.value });
      };

    const handleSubmit = e => {
        e.preventDefault();
        props.addReminders({message: addForm.message, date: addForm.date, time: addForm.time})
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="date"
                value={addForm.date}
                name="date"
                onChange={handleInputChange}
            />
            <input 
                type="time"
                value={addForm.time}
                name="time"
                onChange={handleInputChange}
            />
            <input 
                type="textarea"
                value={addForm.message}
                name="message"
                onChange={handleInputChange}
                placeholder="Add Notes"
            />
            
            <button type="submit">Add Reminder</button>
        </form>
        </>
    )
} 

const mapStateToProps = state => {
    return{
        isRemindersLoading: state.isRemindersLoading,
        reminders: state.reminders,
    }
}

export default withRouter(
    connect(
    mapStateToProps, 
     { addReminders }
    )(ReminderForm)
);

