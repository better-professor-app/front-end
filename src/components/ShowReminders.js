import React, { useState } from "react";
import ReminderList from './RemindersList'
import ReminderForm from './ReminderForm'
import TabNavAnn from './TabNavAnn'


const ShowReminders = () => {
    return (
      <div>
        <header>
          <TabNavAnn />
        </header>
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