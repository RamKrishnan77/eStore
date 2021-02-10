import {shallow} from 'enzyme'
import React from 'react'
import VerticalBar from '../components/chart.component'
import store from '../redux/store' 
import {Provider} from 'react-redux'

//Snapshot testing of Trending Page

it('expect to render Trending Page', () => {
    expect(shallow(<Provider store={store}><VerticalBar></VerticalBar></Provider>)).toMatchSnapshot()
})