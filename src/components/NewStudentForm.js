import React, { useState } from "react"
import axios from "axios"
import { Segment } from "semantic-ui-react"
import styled from "styled-components"

const Heading = styled.h2`
  color: black;
  font-size: 20px;
`
const StudentListCard = styled(Segment)``

const Div = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
`
const PTag = styled.p`
  margin: 10px;
`
const StudentInput = styled.input`
  width: 100%;
  margin: 10px;
  padding: 18px 10px;
  border-radius: 4px;
  border: 1px solid #4e5766;
  box-shadow: 1px 0.5px #888888;
  font-size: 18px;
`
const Button = styled.button`
  padding: 12px 10px;
  width: 100%;
  border-radius: 4px;
  background-color: #4286f4;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
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
        <Div>
          <StudentInput
            onChange={event => changeHandler(event)}
            value={NewStudent.name}
            name="name"
            placeholder="Student Name"
          />
        </Div>
        <Div>
          <StudentInput
            onChange={event => changeHandler(event)}
            value={NewStudent.image}
            name="image"
            placeholder="Image URL"
          />
        </Div>
        <Div>
          <StudentInput
            type="email"
            onChange={event => changeHandler(event)}
            value={NewStudent.location}
            name="email"
            placeholder="Student's E-mail"
          />
        </Div>
        <Button type="submit" onClick={submitHandler}>
          Add New Student
        </Button>
      </form>
    </StudentListCard>
  )
}

export default NewStudentForm
