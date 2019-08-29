import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { register } from "../actions"
import { SignUp, BigDiv, Image,  } from "./Login"
import Logo from "../images/Logo.png"
import styled from "styled-components"
import "./registration.css"
import { Button, Form } from 'semantic-ui-react'

const SignIn = styled.p`
  font-size: 1.2rem;
  text-decoration: none;
  padding-bottom: 1.2rem;
`

const Registration = props => {
  // let token = localStorage.getItem('token');
  //     if (token) {
  //         props.history.push('/')
  //     }
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })
  const [userNameErrors, setUserNameErrors] = useState("")
  const [passwordErrors, setPasswordErrors] = useState("")

  const defaultUser = {
    username: "",
    password: ""
  }

  const validateForm = () => {
    let valid = true

    if (newUser.username.length === 0 || userNameErrors.length > 0) {
      valid = false
      setUserNameErrors("Username must have at least 3 characters")
    }

    if (newUser.password.length === 0 || passwordErrors.length > 0) {
      valid = false
      setPasswordErrors("Password must have at least 6 characters")
    }

    return valid
  }

  const handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target

    let userNameError = userNameErrors
    let passwordError = passwordErrors

    switch (name) {
      case "username":
        userNameError =
          value.length < 3 ? "Username must have at least 3 characters" : ""
        break
      case "password":
        passwordError =
          value.length < 6 ? "Password must have at least 6 characters" : ""
        break
      default:
        break
    }
    setUserNameErrors(userNameError)
    setPasswordErrors(passwordError)

    setNewUser({ ...newUser, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Valid Form")
      props.register(props.history, newUser)
      resetForm()
    } else {
      console.log("Invalid Form")
    }
  }
  const resetForm = () => {
    setNewUser(defaultUser)
  }

  return (
    <>
      <BigDiv>
        <Image src={Logo} alt="It's our logo!" />
        <Form onSubmit={handleSubmit}>
            <Form.Input 
              label='Name' 
              placeholder='Name'
              type="text"
              name="name"
              onChange={handleChange}
              value={newUser.name}
            />
            <Form.Input 
              label='Email' 
              placeholder='Email'
              type="text"
              name="email"
              onChange={handleChange}
              value={newUser.email} 
            />
            <Form.Input 
              label='Username' 
              placeholder='Username'
              type="text"
              name="username"
              onChange={handleChange}
              value={newUser.username} 
            />
            <Form.Input 
              label='Password' 
              placeholder='Password'
              type="password"
              name="password"
              onChange={handleChange}
              value={newUser.password} 
            />
          <SignUp type="submit">Sign up</SignUp>
        </Form>
        <SignIn>Already have an account <Link to="/">Log in</Link></SignIn>
      </BigDiv>
      
    </>
  )
}

const mapStateToProps = state => ({
  isRegistering: state.isRegistering,
  error: state.error
})
export default withRouter(
  connect(
    mapStateToProps,
    { register }
  )(Registration)
)
