import { ADD_PRODUCT, GET_ALL_PRODUCTS, DELETE_PRODUCT } from './productTypes'
// import axios from 'axios'
import { firestore } from '../../firebase/firebase.utils'
import store from '../store'

export const addProduct = async (data) => {
  console.log('created new product')
  await firestore.collection('products').doc(data.id).set(data)

  store.dispatch({
    type: ADD_PRODUCT,
    payload: data,
  })
}

export const deleteOneProduct = async (id) => {
  await firestore
    .collection('products')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!')
    })
    .catch((error) => {
      console.error('Error removing document: ', error)
    })
  store.dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  })
}

export const getAllProducts = () => async (dispatch) => {
  console.log('action ')
  let products = { data: [] }
  await firestore
    .collection('products')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
        products.data.push(doc.data())
      })
    })
  store.dispatch({ type: GET_ALL_PRODUCTS, payload: products })
  console.log(products)
}
