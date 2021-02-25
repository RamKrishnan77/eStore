import React, { lazy, Suspense } from 'react'
import { Container, Row } from 'react-bootstrap'
// import MyCard from './card.component'
import { connect } from 'react-redux'
import SearchBar from './searchBar.component'
import { getAllProducts } from '../redux/product/productActions'
import CheckBox from './filter.component'
const MyCard = lazy(() => import('./card.component'))

const mapStateToProps = (state) => ({
  products: state.products.data,
})

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = { myProducts: [] }
  }

  async componentDidMount() {
    await this.props.getAllProducts()
    this.setState({ myProducts: this.props.products })
    console.log(this.state.myProducts)
    console.log(this.props.products)
  }

  async componentDidUpdate(prevProps) {
    // await console.log(prevProps !== this.props)
    await console.log(this.props)
    if (this.props.products !== prevProps.products) {
      console.log('did Update', this.props.products)
      this.setState({ myProducts: this.props.products })
    }
  }

  onSearchSubmit = (searchInput) => {
    const dynamicResults = this.props.products.filter((el) =>
      el.name.toLowerCase().startsWith(searchInput.toLowerCase())
    )
    console.log(dynamicResults)
    this.setState({ myProducts: dynamicResults })
  }

  handleFilters = (filters, category) => {
    // console.log(filters)
    let dynamicResults = this.state.myProducts
    if (filters.length === 1) {
      dynamicResults = this.props.products.filter(
        (el) => filters[0] && filters[0] === el.gender
      )
    }

    if (filters.length !== 1) {
      dynamicResults = this.props.products
      // console.log(dynamicResults)
    }
    console.log(dynamicResults)
    this.setState({ myProducts: dynamicResults })
  }

  render() {
    return (
      <div className='search-results'>
        <div className='search-and-filter'>
          <SearchBar onSearch={this.onSearchSubmit} />
          <CheckBox
            handleFilters={(filters) => this.handleFilters(filters, 'gender')}
            className='filters'
          />
        </div>
        <div>
          <Container fluid>
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Row>
                {this.state.myProducts &&
                  this.state.myProducts.map((el) => {
                    return (
                      <MyCard
                        id={el.id}
                        img={el.img}
                        name={el.name}
                        type={el.type}
                        price={el.price}
                        rating={el.rating}
                        gender={el.gender}
                        loggedIn={this.props.loggedIn}
                        onChange={(res) => this.setState({ changes: res })}
                      />
                    )
                  })}
              </Row>
            </Suspense>
          </Container>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { getAllProducts })(SearchResults)
