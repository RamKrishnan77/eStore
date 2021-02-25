import React from 'react'
import { Card, Badge, Col, Button, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import {
  deleteOneProduct,
  getAllProducts,
} from '../redux/product/productActions'
import { connect } from 'react-redux'
import { firestore } from '../firebase/firebase.utils'

const MyCard = ({
  id,
  name,
  img,
  rating,
  gender,
  type,
  price,
  history,
  match,
  loggedIn,
}) => {
  return (
    <Col md={3}>
      <Card border='light'>
        <Card.Img
          classname='card-img'
          variant='top'
          src={img}
          onClick={async () => {
            console.log(history.push(`${match.url}/${id}`))
          }}
        />
        <Card.Body>
          <Card.Title
            onClick={() => console.log(history.push(`${match.url}/${id}`))}>
            {name}
          </Card.Title>
          <Card.Text>
            <div className='badge-div'>
              <Badge variant='secondary' className='badge'>
                {rating}
              </Badge>
              <Badge variant='secondary' className='badge'>
                {gender}
              </Badge>
              <Badge variant='secondary' className='badge'>
                {type}
              </Badge>
            </div>
            <div className='badge-div'>
              <h3>Rs.{price}</h3>
            </div>
          </Card.Text>
        </Card.Body>

        {loggedIn ? (
          <Button
            variant='primary'
            className='edit-button'
            onClick={async (e) => {
              if (window.confirm('are you sure you want to edit?')) {
                history.push(`/edit/${id}`)
              } else {
              }
            }}>
            EDIT
          </Button>
        ) : null}

        {loggedIn ? (
          <Button
            variant='danger'
            type='submit'
            onClick={async (e) => {
              // e.preventDefault()
              if (window.confirm('are you sure you want to delete?')) {
                // await sayHi()
                setTimeout(() => {
                  deleteOneProduct(id)
                }, 1000)
                console.log('from delete button')
              } else {
              }
            }}>
            DELETE
          </Button>
        ) : null}
      </Card>
    </Col>
  )
}

export default withRouter(MyCard)
