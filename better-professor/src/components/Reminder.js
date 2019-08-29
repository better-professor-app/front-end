import React from 'react'
import axios from 'axios'
import{ axiosWithAuth} from '../utilities/axiosWithAuth'
import './reminder.css'

const Reminder = props => {

    console.log(props)

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date(props.reminder.date).toLocaleDateString('en-US', options) 
    

    const deleteReminder = e => {
        e.preventDefault()

        console.log(props.reminder.id)
        axios.delete(`https://better-prof-app.herokuapp.com/api/reminders/${props.reminder.id}`)
        .then(res => {
            console.log('delete', res)
            
        })
    }
    return(
        <div className="reminder">
            <button className="delete-btn" onClick={deleteReminder}>X</button>
            <h3> {date}, {props.reminder.time}</h3>
            {/* <h3>Time: {props.reminder.time}</h3> */}
            <h3>{props.reminder.message}</h3>
            
        </div>
    )
}

export default Reminder;