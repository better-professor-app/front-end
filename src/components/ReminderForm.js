import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { addReminders } from "../actions"
import { DatePicker } from "antd"
// import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import "./reminder.css"
import styled from "styled-components"

const Form = styled.form`
  /* padding: 25px; */
  margin: 25px;
  display: flex;
  flex-flow: column;
`
const Label = styled.label`
  font-size: 2rem;
`
const InputTime = styled.input`
  flex-flow: row;
  padding: 15px;
  margin: 15px;
  justify-content: center;
  font-size: 1rem;
  width: 45%;
`

const InputNotes = styled.input`
  font-size: 1.2rem;
  margin: 15px;
  width: 45%;
  justify-content: center;
  overflow-wrap: break-all;
  height: 150px;
`

const ReminderForm = props => {
  const [addForm, setForm] = useState({
    message: "",
    date: "",
    time: ""
  })

  const handleInputChange = event => {
    setForm({ ...addForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addReminders({
      message: addForm.message,
      date: addForm.date,
      time: addForm.time
    })
  }
  function onOk(value) {
    console.log("onOk: ", value)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Date:
          <InputTime
            type="date"
            value={addForm.date}
            name="date"
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Time:
          <InputTime
            type="time"
            value={addForm.time}
            name="time"
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Additional Notes:
          <InputNotes
            type="textarea"
            value={addForm.message}
            name="message"
            onChange={handleInputChange}
            placeholder="Add Notes"
          />
        </Label>
        {/* <button type="submit" className="add-btn">
          Add Reminder
        </button> */}
      </Form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isRemindersLoading: state.isRemindersLoading,
    reminders: state.reminders
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { addReminders }
  )(ReminderForm)
)
