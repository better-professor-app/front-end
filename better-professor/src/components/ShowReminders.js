import React, { useState } from "react";
import ReminderList from './RemindersList'
import ReminderForm from './ReminderForm'



const ShowReminders = () => {
  const [removed, setremove] = useState([])

  const removeRemiders = id => {
    setremove(removed.filter(item => item.id != id))
  }
    return (
      <div>
         <h1>Add Reminders</h1>
        <div className="flex">
          <ReminderForm />
          <ReminderList removeRemiders={removeRemiders} />
        </div>
        
      </div>
    );
  
}

export default ShowReminders;