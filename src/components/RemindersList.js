import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getReminders } from "../actions"
import Loader from "react-loader-spinner"

import Reminder from "./Reminder"

const RemindersList = props => {
  // console.log('props', props)
  console.log("props.reminders", props.reminders)
  return (
    <div>
      <button className="see-all-btn" onClick={props.getReminders}>
        {props.isRemindersLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        ) : (
          "All Reminders"
        )}
      </button>
      {props.error && <p className="error">{props.error}</p>}
      {props.reminders &&
        props.reminders.map(item => (
          <Reminder key={Math.random()} reminder={item} />
        ))}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isRemindersLoading: state.isRemindersLoading,
    reminders: state.reminders,
    error: state.error
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getReminders }
  )(RemindersList)
)
