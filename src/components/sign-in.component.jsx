import React from 'react';
import {withRouter} from 'react-router-dom'

import FormInput from './formInput.component';
import CustomButton from './custom-button.component';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import './styles/sign-in.styles.scss';
import {Button} from 'react-bootstrap'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.props.history.push('/')
    } catch (error){
        console.log(error)

    }

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          {console.log(this.props)}
          <div className='buttons'>
            <CustomButton type='submit' > Sign in </CustomButton>
            <Button className='google-button sign-in-button' onClick={async () => {
              await signInWithGoogle()
              this.props.history.push('/')
            }} isGoogleSignIn>
              Google Sign in
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);