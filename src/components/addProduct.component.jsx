import React from 'react'
import { Formik, Field, Form } from 'formik'
import { addProduct } from '../redux/product/productActions'
import { connect } from 'react-redux'
import { Prompt, withRouter } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import '../App.css'

const initialValues = {
  name: '',
  img: '',
  img1: '',
  img2: '',
  img3: '',
  img4: '',
  gender: 'Men',
  sizes: ['7'],
  rating: Math.floor(Math.random() * (5 - 1)) + 1,
  price: Math.floor(Math.random() * (10000 - 3000)) + 3000,
  type: 'Sneakers',
  quantity: Math.floor(Math.random() * (10000 - 3000)) + 3000,
  count: Math.floor(Math.random() * (10000 - 3000)) + 3000,
  id: '',
}

const validate = (values) => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Product Name is required'
  }

  if (!values.img) {
    errors.img = 'Product Image is required'
  }

  if (!values.gender) {
    errors.gender = 'gender is required'
  }

  if (!values.sizes) {
    errors.sizes = 'sizes is required'
  }

  if (!values.rating) {
    errors.rating = 'rating is required'
  }

  if (!values.price) {
    errors.price = 'Price is required'
  }

  if (!values.type) {
    errors.type = 'type is required'
  }

  if (!values.quantity) {
    errors.quantity = 'Quantity  is required'
  }

  return errors
}

class AddProduct extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit(data, { setSubmitting, resetForm }) {
    console.log(data)
    data.id = uuidv4()
    console.log('why not navigating')

    addProduct(data)

    resetForm(true)
    this.props.history.push('/products')
  }

  render() {
    return (
      <div className='add-product-component'>
        <h2 className='form-title'>Add Product</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          validate={validate}>
          {({ values, errors, touched, isSubmitting, isValid, dirty }) => (
            <div class='d-flex p-2 border'>
              <Prompt
                when={!!dirty}
                message={(location) =>
                  `Are you sure you want to go to ${location.pathname}`
                }
              />
              <Form className='form'>
                <div className='label bold'>Product Name</div>
                <Field
                  className='field'
                  name='name'
                  placeholder='product name'
                  type='input'></Field>
                {!isValid && errors.name && touched.name ? (
                  <div className='error'>{errors.name}</div>
                ) : null}
                <div className='label bold'>Product Card Image</div>
                <Field
                  className='field'
                  name='img'
                  placeholder='product image'
                  type='input'></Field>
                {!isValid && errors.img && touched.img ? (
                  <div className='error'>{errors.img}</div>
                ) : null}
                <div className='label bold'>Product Image 1</div>
                <Field
                  className='field'
                  name='img1'
                  placeholder='produc deatails image 1'
                  type='input'></Field>
                {!isValid && errors.img1 && touched.img1 ? (
                  <div className='error'>{errors.img1}</div>
                ) : null}
                <div className='label bold'>Product Image 2</div>
                <Field
                  className='field'
                  name='img2'
                  placeholder='produc details image 2'
                  type='input'></Field>
                {!isValid && errors.img2 && touched.img2 ? (
                  <div className='error'>{errors.img2}</div>
                ) : null}
                <div className='label bold'>Product Image 3</div>
                <Field
                  className='field'
                  name='img3'
                  placeholder='produc details image 3'
                  type='input'></Field>
                {!isValid && errors.img3 && touched.img3 ? (
                  <div className='error'>{errors.img3}</div>
                ) : null}
                <div className='label bold'>Product Image 4</div>
                <Field
                  className='field'
                  name='img4'
                  placeholder='produc details image 4'
                  type='input'></Field>
                {!isValid && errors.img4 && touched.img4 ? (
                  <div className='error'>{errors.img4}</div>
                ) : null}
                <div className='label bold'>Gender</div>
                <div role='group' aria-labelledby='my-radio-group'>
                  <label className='bold'>
                    <Field
                      className='field'
                      type='radio'
                      name='gender'
                      value='Men'
                    />
                    Men
                  </label>
                  <label className='bold'>
                    <Field
                      className='field'
                      type='radio'
                      name='gender'
                      value='Women'
                    />
                    Women
                  </label>
                </div>
                {!isValid && errors.gender && touched.gender ? (
                  <div className='error'>{errors.gender}</div>
                ) : null}
                <div className='label bold'>Product Rating</div>
                <Field
                  className='field'
                  name='rating'
                  placeholder='rating'
                  type='number'></Field>
                {!isValid && errors.rating && touched.rating ? (
                  <div className='error'>{errors.rating}</div>
                ) : null}
                <div className='label bold'>Product Price</div>
                <Field
                  className='field'
                  name='price'
                  placeholder='price'
                  type='number'></Field>
                {!isValid && errors.price && touched.price ? (
                  <div className='error'>{errors.price}</div>
                ) : null}
                <div className='label bold'>Product Type</div>
                <Field
                  className='field'
                  name='type'
                  placeholder='type'
                  type='input'></Field>
                {!isValid && errors.type && touched.type ? (
                  <div className='error'>{errors.type}</div>
                ) : null}
                <div className='label bold'>Product Quantity</div>
                <Field
                  className='field'
                  name='quantity'
                  placeholder='quantity'
                  type='number'></Field>{' '}
                {errors.quantity && touched.quantity ? (
                  <div className='error'>{errors.quantity}</div>
                ) : null}
                <div className='label bold  '>Product Sizes</div>
                <div role='group' aria-labelledby='checkbox-group'>
                  <label>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='sizes'
                      value='6'
                    />
                    6
                  </label>
                  <label>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='sizes'
                      value='7'
                    />
                    7
                  </label>
                  <label>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='sizes'
                      value='8'
                    />
                    8
                  </label>
                  <label>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='sizes'
                      value='9'
                    />
                    9
                  </label>
                  <label>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='sizes'
                      value='10'
                    />
                    10
                  </label>
                  <label>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='sizes'
                      value='11'
                    />
                    11
                  </label>
                  <label>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='sizes'
                      value='12'
                    />
                    12
                  </label>
                </div>
                <div>
                  <button disabled={isSubmitting} type='submit'>
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}

export default withRouter(AddProduct)
