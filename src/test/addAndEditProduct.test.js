import {shallow} from 'enzyme'
import React from 'react'
import AddProduct from '../components/addProduct.component'
import EditProduct from '../components/editProduct.component'
import ProfilePage from '../components/ProfilePage.component'
import MyCard from '../components/card.component'
import CheckBox from '../components/filter.component'
import SearchBar from '../components/searchBar.component'
import CustomButton from '../components/custom-button.component'
import FormInput from '../components/formInput.component'
import ProductDetailsPage from '../components/productDetailsPage.component'
import SearchResults from '../components/searchResults.component'
import store from '../redux/store' 
import {Provider} from 'react-redux'

//Snapshot testing of AddProduct Page

it('expect to render AddProduct Page', () => {
    expect(shallow(<Provider store={store}><AddProduct></AddProduct></Provider>)).toMatchSnapshot()
})

//Snapshot testing of EditProduct Page

it('expect to render EditProduct Page', () => {
    expect(shallow(<Provider store={store}><EditProduct></EditProduct></Provider>)).toMatchSnapshot()
})

//Snapshot testing of Profile Page

it('expect to render Profile Page', () => {
    expect(shallow(<Provider store={store}><ProfilePage></ProfilePage></Provider>)).toMatchSnapshot()
})

//Snapshot testing of Card

it('expect to render Card', () => {
    expect(shallow(<Provider store={store}><MyCard></MyCard></Provider>)).toMatchSnapshot()
})

//Snapshot testing of filter

it('expect to render Filter', () => {
    expect(shallow(<Provider store={store}><CheckBox></CheckBox></Provider>)).toMatchSnapshot()
})

//Snapshot testing of SearchBar

it('expect to render SearchBar', () => {
    expect(shallow(<Provider store={store}><SearchBar></SearchBar></Provider>)).toMatchSnapshot()
})

//Snapshot testing of SearchResults

it('expect to render SearcResults', () => {
    expect(shallow(<Provider store={store}><SearchResults></SearchResults></Provider>)).toMatchSnapshot()
})

//Snapshot testing of ProductDetails

it('expect to render ProductDetails', () => {
    expect(shallow(<Provider store={store}><ProductDetailsPage></ProductDetailsPage></Provider>)).toMatchSnapshot()
})

//Snapshot testing of CustomButton

it('expect to render CustomButton', () => {
    expect(shallow(<Provider store={store}><CustomButton></CustomButton></Provider>)).toMatchSnapshot()
})

//Snapshot testing of formInput

it('expect to render FormInput', () => {
    expect(shallow(<Provider store={store}><FormInput></FormInput></Provider>)).toMatchSnapshot()
})

