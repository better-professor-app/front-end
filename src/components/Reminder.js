import React, { useState } from 'react'
import axios from 'axios'
import{ axiosWithAuth} from '../utilities/axiosWithAuth'
import { deleteReminder } from '../actions'
import { useDispatch } from 'react-redux'
import './reminder.css'

const Reminder = props => {
    const [removed, setremove] = useState([])

    const dispatch = useDispatch()
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date(props.reminder.date).toLocaleDateString('en-US', options) 
    
    console.log('props', props.reminder.id)
    
    return(
        <div className="reminder">
            <button className="delete-btn" onClick={() => dispatch(deleteReminder(props.reminder.id))}>X</button>

            <h3> {date}, {props.reminder.time}</h3>
            {/* <h3>Time: {props.reminder.time}</h3> */}
            <h3>{props.reminder.message}</h3>
            
        </div>
    )
}

export default Reminder;