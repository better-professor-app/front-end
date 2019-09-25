// import React, { useState, useEffect } from "react"
// import { Route, NavLink } from "react-router-dom"
// import { Segment, Grid, GridColumn, Button } from "semantic-ui-react"
// import styled from "styled-components"
// import axios from 'axios';
// import StudentProfile from "./StudentProfile"
// import { axiosWithAuth } from "../utilities/axiosWithAuth"
// import DummyComponent from "./DummyComponent"

// ////g
// const [students, setStudents] = useState([])
//   useEffect(() => {
//     const AddStudentButton = () => <button onClick={()=>{ => {
// axios
//         .post("https://better-prof-app.herokuapp.com/api/students", sentData)
//         .then(response => {
//           setStudents(response.data)
//         })
//         .catch(error => {
//           console.error("Server Error", error)
//         })
//     }

//     getStudents()
//   }, [])

//   return (
//     <PageContainer className="pageContainer">
//         <Grid columns={2} divided>
//             <Grid.Row>
//                 <Grid.Column>
//                     <StudentListContainer className="studentListContainer">
//                         <h2>Students</h2>
//                         <Segment>
//                             {students.map(student => {
//                                 return (
//                                         <StudentListCard className="studentListCard">
//                                             <NavLink exact to={`/protected/students/${student.id}`} key={student.id}>
//                                                 <img src={student.img} alt="portrait of student" />
//                                                 <h3>{student.name}</h3>
//                                             </NavLink>
//                                     </StudentListCard>
//                                 )
//                             })}
