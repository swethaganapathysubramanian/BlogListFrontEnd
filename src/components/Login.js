import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/loginReducer'
import { addUser } from '../reducers/userReducer'
import Signup from './Signup'
import { setNotification, setType } from '../reducers/notificationReducer'
import { useHistory } from 'react-router-dom'
import LaunchPage from './LaunchPage'
import { Button, Header, Modal, Form } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [modalOpen, setModalOpen] = useState(false)
  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  const [addModalOpen, setAddModalOpen] = useState(false)
  const addHandleOpen = () => setAddModalOpen(true)
  const addHandleClose = () => setAddModalOpen(false)

  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const loginintoApp = async (event) => {
    console.log(username)
    event.preventDefault()
    try {
      
      dispatch(login(username,password))
      history.push('/')
      //5.2 1/3
    } catch (error) {
      //5.4 2/5
      console.log(error)
      setMessage(error)
      setMessageType('error')
      setTimeout(() => {
        setMessage('')
        setMessageType('')
      }, 5000)
    }
  }

  const signup = (userData) => {
    try {
      dispatch(addUser(userData))
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      dispatch(login(userData.username, userData.password))
      history.push('/')
    }, 5000)
  }


  // const loginintoApp = (event) => {
  //   event.preventDefault()
  //   handleLogin(username, password)
  // }

  //5.2 3/3
  // const handleLogout = (event) => {
  //   console.log(event)
  //   //event.preventDefault()
  //   window.localStorage.clear()
  //   setUser(null)
  // }

  return(
    <div>
      <LaunchPage handleOpen={handleOpen} addHandleOpen={addHandleOpen} />
      <Modal open={modalOpen} onClose={handleClose} size='small' closeIcon dimmer='blurring'>
        <Header content='Login into Application' />
        <Modal.Content>
          <Form className='login-input' autoComplete='off'>
            <Form.Input
              inline
              label="Username: "
              type="text"
              id="username"
              className='login-input'
              value={username}
              name="username"
              onChange={({ target }) => setUsername(target.value)
              } /> <br /> <br />
            <Form.Input
              inline
              label="Password: "
              type="password"
              id="password"
              className='login-input'
              value={password}
              name="password"
              onChange={({ target }) => setPassword(target.value)} /> <br /> <br />
            <Button id="submit" onClick={loginintoApp}>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
      <Signup addModalOpen={addModalOpen} addHandleOpen={addHandleOpen} addHandleClose={addHandleClose} signup={signup}/>
    </div>
  )
}

export default Login