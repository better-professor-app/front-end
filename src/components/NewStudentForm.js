import React, { useState } from "react"
import axios from "axios"
import { Segment } from "semantic-ui-react"
import styled from "styled-components"

const Heading = styled.h2`
  color: black;
  font-size: 20px;
`
const StudentListCard = styled(Segment)``

const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`
const PTag = styled.p`
  margin: 10px;
`
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
    <StudentListCard>
      <Heading>New Student Form</Heading>
      <form onSubmit={event => submitHandler(event)}>
        <Label>
          <PTag>Student's Name:</PTag>
          <input
            onChange={event => changeHandler(event)}
            value={NewStudent.name}
            name="name"
            placeholder="Student Name"
          />
        </Label>
        <Label>
          <PTag>Profile Image:</PTag>
          <input
            onChange={event => changeHandler(event)}
            value={NewStudent.image}
            name="image"
            placeholder="URL"
          />
        </Label>
        <Label>
          <PTag>E-mail:</PTag>
          <input
            type="email"
            onChange={event => changeHandler(event)}
            value={NewStudent.location}
            name="email"
            placeholder="Student's E-mail"
          />
        </Label>
        <button type="submit">Add New Student</button>
      </form>
    </StudentListCard>
  )
}

export default NewStudentForm
