import {shallow} from 'enzyme'
import React from 'react'
import SignInAndSignUpPage from '../components/sign-in-and-sign-up.component'

//Snapshot testing of SignInAndSignUpPage using Eznyme’s Full DOM rendering 

it('expect to render SignInAndSignUpPage', () => {
    expect(shallow(<SignInAndSignUpPage></SignInAndSignUpPage>)).toMatchSnapshot()
})

