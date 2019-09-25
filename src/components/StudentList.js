import React, { useState, useEffect } from "react"
import { Route, NavLink, Link } from "react-router-dom"
import { Segment, Grid } from "semantic-ui-react"
import styled from "styled-components"
import StudentProfile from "./StudentProfile"
import { axiosWithAuth } from "../utilities/axiosWithAuth"
import TabNavAnn from "./TabNavAnn"
import "./reminder.css"
import NewStudentForm from "./NewStudentForm"

export default function StudentList() {
  const StudentListContainer = styled(Segment)``

  const PageContainer = styled.div`
    padding: 1rem;
    max-width: 1100px;
    margin: 0 auto;
    /* border: 3px solid #131e00; */
  `

  const StudentListCard = styled(Segment)``

  const StudentListNavLink = styled(NavLink)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.active {
      color: red;
    }
  `

  const ThumbnailImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
  `

  const ThumbnailSpan = styled.span`
    font-size: 20px;
    color: black;

    @keyframes glow {
      to {
        text-shadow: 1px 1px 2px #90b64c, 0 0 10px #90b64c;
      }
    }

    .active & {
      font-weight: bold;
      animation: glow 0.5s infinite alternate;
    }
  `

  const [students, setStudents] = useState([])
  useEffect(() => {
    const getStudents = () => {
      axiosWithAuth()
        .get("https://better-prof-app.herokuapp.com/api/students")
        .then(response => {
          if (response.data.img === null) {
            response.data.img = "http://placekitten.com/100/100"
          }
          setStudents(response.data)
        })
        .catch(error => {
          console.error("Server Error", error)
        })
    }

    getStudents()
  }, [])

  return (
    <>
      <header>
        <TabNavAnn />
      </header>
      <PageContainer className="pageContainer">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <StudentListContainer className="studentListContainer">
                <h2>Students</h2>
                <Link to="/protected/newstudent">Add</Link>
                {students.map(student => {
                  return (
                    <StudentListCard className="studentListCard">
                      <StudentListNavLink
                        exact
                        to={`/protected/students/${student.id}`}
                        key={student.id}
                      >
                        <ThumbnailImg
                          src={student.img}
                          alt="portrait of student"
                        />
                        <ThumbnailSpan>{student.name}</ThumbnailSpan>
                      </StudentListNavLink>
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
                exact
                path="/protected/newstudent"
                component={NewStudentForm}
              />
              {/* <Route
                        path="/protected/students/:id/project/:project_id"
                        component={DummyComponent}
                    /> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </PageContainer>
    </>
  )
}
