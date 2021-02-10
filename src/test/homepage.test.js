import {shallow} from 'enzyme'
import React from 'react'
import HomePage from '../components/homePage.component'

//Snapshot testing of SignIn using Eznyme’s Full DOM rendering 

it('expect to render homepage component', () => {
    expect(shallow(<HomePage></HomePage>)).toMatchSnapshot()
})