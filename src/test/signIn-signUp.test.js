import {shallow} from 'enzyme'
import React from 'react'
import SignIn from '../components/sign-in.component'
import SignUp from '../components/sign-up.component'

//Snapshot testing of SignIn using Eznyme’s Full DOM rendering 

it('expect to render SignIn component', () => {
    expect(shallow(<SignIn></SignIn>)).toMatchSnapshot()
})

//Snapshot testing of SignUp using Eznyme’s Full DOM rendering 

it('expect to render SignUp', () => {
    expect(shallow(<SignUp></SignUp>)).toMatchSnapshot()
})

