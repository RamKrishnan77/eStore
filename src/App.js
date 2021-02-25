import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import MyCard from './components/card.component.jsx'
import SearchResults from './components/searchResults.component'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './components/homePage.component'
import AddProduct from './components/addProduct.component'
// import LoginButton from './components/loginButton.component'
import ProductDetailsPage from './components/productDetailsPage.component'
import SearchBar from './components/searchBar.component'
// import LoginPage from './components/loginPage.component'
import SignInAndSignUpPage from './components/sign-in-and-sign-up.component'
import VerticalBar from './components/chart.component'
import ProfilePage from './components/profilePage.component'
import EditProduct from './components/editProduct.component'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllProducts } from './redux/product/productActions'
import { getAllUsers } from './redux/user/user.actions'
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      productList: [],
    }
  }

  unsubscribeFromAuth = null

  async componentDidMount() {
    await this.props.getAllProducts()
    this.setState({ productList: this.props.products })
    console.log('hello')
    console.log(this.props.products)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
          console.log(this.state.productList)
        })
      } else {
        await this.setState({ currentUser: userAuth })
        console.log(userAuth)
      }
    })
  }

  // componentDidUpdate() {
  //   if (this.props.products.data !== this.state.productList.data) {
  //     this.props.getAllProducts()
  //   }
  // }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <div className='App'>
          <Navbar collapseOnSelect expand='lg' bg='light' fixed='top'>
            <Navbar.Brand href=''>
              <Link to='/' className='links'>
                eStore
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link>
                  <Link to='/products' className='links'>
                    Products
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/trending' className='links'>
                    Trending
                  </Link>
                </Nav.Link>

                {this.state.currentUser ? (
                  <Nav.Link>
                    <Link to='/add' className='links'>
                      Add Product
                    </Link>
                  </Nav.Link>
                ) : null}

                {this.state.currentUser ? (
                  <NavDropdown
                    id='collasible-nav-dropdown'
                    variant='dark'
                    title={this.state.currentUser.displayName}>
                    <NavDropdown.Item
                      onClick={() => {
                        this.props.history.push('/products')
                        auth.signOut()
                      }}>
                      Log Out
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to='/profile' className='links'>
                        Profile
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link>
                    <Link to='/login' className='links'>
                      login
                    </Link>
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/products'>
            <SearchResults loggedIn={this.state.currentUser}></SearchResults>
          </Route>
          <Route exact path='/trending'>
            <VerticalBar></VerticalBar>
          </Route>
          <Route exact path='/login'>
            <SignInAndSignUpPage />
          </Route>
          <Route exact path='/profile'>
            <ProfilePage userData={this.state.currentUser} />
          </Route>
          <Route exact path='/add' component={AddProduct}></Route>
          <Route path='/edit/:editId' component={EditProduct}></Route>
          <Route
            exact
            path='/products/:productId'
            component={ProductDetailsPage}></Route>
          <Route exact path='/search' component={SearchBar}></Route>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: (products) => dispatch(getAllProducts(products)),
})

export default connect(mapStateToProps, { getAllProducts, getAllUsers })(
  withRouter(App)
)
