import React, { useState } from "react";
import ReminderList from './RemindersList'
import ReminderForm from './ReminderForm'



const ShowReminders = () => {
    return (
      <div>
         <h1>Add Reminders</h1>
        <div className="container">
          <div>
            <ReminderForm />
            <ReminderList />
          </div>
        </div>
        
      </div>
    );
  
}

export default ShowReminders;