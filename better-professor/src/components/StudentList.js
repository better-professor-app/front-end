import React, { useState, useEffect } from "react"
import { Route, NavLink } from "react-router-dom"
import { Segment, Grid, GridColumn } from "semantic-ui-react"
import styled from "styled-components"

import StudentProfile from "./StudentProfile"
import { axiosWithAuth } from "../utilities/axiosWithAuth"
import DummyComponent from "./DummyComponent"

export default function StudentList() {
  const StudentListContainer = styled(Segment)`
  `

  const PageContainer = styled.div`
    padding: 1rem;
  `

  const StudentListCard = styled(Segment)`
    display: flex;
  `


  const [students, setStudents] = useState([])
  useEffect(() => {
    const getStudents = () => {
      axiosWithAuth()
        .get("https://better-prof-app.herokuapp.com/api/students")
        .then(response => {
            response.data.forEach((student) => {
                student.img = 'http://placekitten.com/100/100';
            })
          setStudents(response.data)
        })
        .catch(error => {
          console.error("Server Error", error)
        })
    }

    getStudents()
  }, [])

  return (
    <PageContainer className="pageContainer">
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <StudentListContainer className="studentListContainer">
                        <h2>Students</h2>

                        {students.map(student => {
                            return (
                                    <StudentListCard className="studentListCard">
                                        <NavLink exact to={`/protected/students/${student.id}`} key={student.id}>
                                            <img src={student.img} alt="portrait of student" />
                                            <h3>{student.name}</h3>
                                        </NavLink> 
                                </StudentListCard>
                            )
                        })}
                    </StudentListContainer>
                </Grid.Column>
                <Grid.Column>
                    <Route
                        exact
                        path="/protected/students/:id"
                        render={props => <StudentProfile {...props} />}
                    />
                    <Route
                        path="/protected/students/:id/project/:project_id"
                        component={DummyComponent}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </PageContainer>
  )
}
