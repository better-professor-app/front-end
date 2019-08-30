import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import { axiosWithAuth } from '../utilities/axiosWithAuth'

export default function StudentProfile(props) {
    const StudentProfileContainer = styled(Segment)`
    `

    const StudentProfileHeaderContainer = styled(Segment)`
        display: flex;
        flex-direction: column;
    `

    const StudentProfileHeaderImg = styled.img`
        align-self: center
        border-radius: 10px;
        max-width: 300px;
    `

    const ProjectContainer = styled(Segment)`

    `

    const ProjectToggleDiv = styled.div`
        background-color: lightgray;
        border-radius: 20px;
        margin-top: 10px;
    `

    const ProjectTitleDiv = styled.div`
        &:hover {
            cursor: pointer;
        }
    `

    const [student, setStudent] = useState([])
    const [openProjects, setOpenProjects] = useState([])

    useEffect(() => {
      const getStudent = () => {
        axiosWithAuth()
          .get(`https://better-prof-app.herokuapp.com/api/students/${props.match.params.id}`)
          .then(response => {
            console.log(response)
            // response.data.img = 'http://placekitten.com/200/200';
            setStudent(response.data);
          })
          .catch(error => {
            console.error('Server Error', error)
          })
      }

      getStudent();
    }, [props.match.params.id]);
 
    function showHideProject(project_id) {
        if (openProjects.includes(project_id)) {
            openProjects.splice(openProjects.indexOf(project_id), 1)
        } else {
            openProjects.push(project_id)
        }
        setOpenProjects([...openProjects])
    }

    return (
        <StudentProfileContainer className="studentProfileContainer">
            <StudentProfileHeaderContainer className="studentProfileHeaderContainer">
                <h2>{student.name}</h2>
                <span>Program: {student.grad_program}</span>
                <br />
                <StudentProfileHeaderImg src={student.img} alt='portrait of student' />
                <br />
                <a href={`mailto:${student.email}`}>Email</a>
            </StudentProfileHeaderContainer>
            <h2>Projects</h2>
            <div className="studentProfileProjectsContainer">
                {student.projects && student.projects.map( project => {
                    return (
                        <ProjectContainer key={project.project_id}>
                                <ProjectTitleDiv onClick={() => showHideProject(project.project_id)}>{project.name}</ProjectTitleDiv>
                                {openProjects.includes(project.project_id) &&
                                    <ProjectToggleDiv>
                                        <br />
                                        <span>Grade: {project.grade}</span>
                                        <br />
                                        <span>Notes: {project.notes}</span>
                                        <br />
                                        <br />
                                    </ProjectToggleDiv>
                                }
                        </ProjectContainer>
                    )
                })}
            </div>
        </StudentProfileContainer>
    )
}