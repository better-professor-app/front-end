import React, { useState } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

function NewStudentForm(props) {
  const [NewStudent, setNewStudent] = useState({})

  const submitHandler = event => {
    event.preventDefault()
    const copy = { ...NewStudent }

    copy.image
      ? console.log("User submitted a profile image")
      : console.log("User did not submit a profile image")
    if (!copy.image) {
      copy.image =
        "https://www.trzcacak.rs/myfile/detail/32-327033_generic-profile-picture-png.png"
    }

    axios
      .post("https://better-prof-app.herokuapp.com/api/students", NewStudent)
      .then(response => {
        setNewStudent(response.data)
      })
      .catch(error => {
        console.error("Server Error", error)
      })
  }
  const changeHandler = event => {
    setNewStudent({ ...NewStudent, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <p>New Student Form</p>
      <form onSubmit={event => submitHandler(event)}>
        <input
          onChange={event => changeHandler(event)}
          value={NewStudent.name}
          name="name"
          placeholder="Student Name"
        />
        <input
          onChange={event => changeHandler(event)}
          value={NewStudent.image}
          name="image"
          placeholder="Profile Image URL"
        />
        <input
          onChange={event => changeHandler(event)}
          value={NewStudent.location}
          name="location"
          placeholder="Student Location"
        />
        <button type="submit">Add New Student</button>
      </form>
    </div>
  )
}

export default NewStudentForm
