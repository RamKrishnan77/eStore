import React from 'react';

import SignIn from './sign-in.component';
import SignUp from './sign-up.component';

import './styles/sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;