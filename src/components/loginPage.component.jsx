import React from 'react';
import {Form, Button} from 'react-bootstrap'
import '../App.css'
import LoginButton from './loginButton.component'
import {signInWithGoogle} from '../firebase/firebase.utils'
import {withRouter} from 'react-router-dom'

const LoginPage = ({history}) => {
    return (
        <div className='login-div'>
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className='login-buttons-div'>
        <Button variant='dark'  className='login-buttons'>Login</Button>
        </div>
        <div>
        <Button className='login-buttons' onClick={(e) => {signInWithGoogle()
        e.preventDefault()}}>Login with Google</Button>
        </div>
        <div>
        <Button variant='secondary' className='login-buttons' onClick = {() => 
            history.push('/signup')
        }>Sign Up</Button>
        </div>
      </Form>
        </div>
    );
};

export default withRouter(LoginPage);