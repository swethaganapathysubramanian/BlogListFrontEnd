import React, { useState } from 'react'
import { Form, Message, Button, Modal, Header } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addUser } from '../reducers/userReducer'
import userService from '../services/users'
import { login } from '../reducers/loginReducer'
import { useHistory } from 'react-router-dom'

const Signup = ({addModalOpen, addHandleClose, signup }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')

    const addUser = () => {
         try{
            const userData = {
                name: name,
                username: username,
                password: password,
                about: about
            }     
           signup(userData)
        } catch (error) {
            console.log(error)
        }
        addHandleClose()
       
    }

    return(
        <Modal open={addModalOpen} onClose={addHandleClose} size='small' closeIcon dimmer='blurring'>
            <Header content='Sign-up' />
            <Modal.Content>
                <Form className='login-input' onSubmit={addUser}>
                    <Form.Input
                        inline
                        fluid
                        label="Name:"
                        type="text"
                        id="name"
                        className='login-input'
                        value={name}
                        name="name"
                        onChange={({ target }) => setName(target.value)
                        } /> <br /> <br />
                    <Form.Input
                        inline
                        fluid
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
                        fluid
                        label="Password: "
                        type="password"
                        id="password"
                        className='login-input'
                        value={password}
                        name="password"
                        onChange={({ target }) => setPassword(target.value)} /> <br /> <br />
                    <Form.Input
                        inline
                        fluid
                        label="One Line About You: "
                        type="textarea"
                        id="about"
                        className='login-input'
                        value={about}
                        name="about"
                        onChange={({ target }) => setAbout(target.value)
                        } /> <br /> <br />
                    <Button id="submit" onClick={addUser}>Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default Signup