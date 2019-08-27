import React, { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-browser-router'
import { Segment } from 'semantic-ui-react'

import StudentProfile from './StudentProfile'
import { axiosWithAuth } from '../utilities/axiosWithAuth'

export default function StudentList() {
    const [students, setStudents] = useState([])
    useEffect(() => {
      const getStudents = () => {
        axiosWithAuth()
          .get('https://better-prof-app.herokuapp.com/api/students')
          .then(response => {
            setStudents(response.data);
            console.log(students);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }

      getStudents();
    }, []);
 

    return (
        <>
        <Segment className="studentListContainer">
            {students.map(student => {
                return (
                    <NavLink to={`/students/${student.id}/profile`} key={student.id}>
                        <Segment className="studentListCard">
                            {/*<img src={student.img} alt="student portrait"/>*/}
                            <h2>{student.name}</h2>
                        </Segment>
                    </NavLink>
                )
            })}
        </Segment>
        <Route path="/students/:id/profile" render={props => <StudentProfile {...props}/>} />
        </>
    )
}
