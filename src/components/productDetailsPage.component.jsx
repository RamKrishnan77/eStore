import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Button,
  ButtonGroup,
  Carousel,
} from 'react-bootstrap'
import '../App.css'
import { connect } from 'react-redux'
import { getAllProducts } from '../redux/product/productActions'
// import axios from 'axios';

const mapStateToProps = (state) => ({
  products: state.products.data,
})

const ProductDetailsPage = (props) => {
  const productObject = props.products.filter(
    (ob) => ob.id == props.match.params.productId
  )[0]
  const [matches, setMatches] = useState({
    matches: window.matchMedia('(min-width: 768px)').matches,
  })

  useEffect(() => {
    // const handler = e => setMatches({matches: e.matches});
    const mql = window.matchMedia('(min-width: 768px)')
    mql.addEventListener('change', (e) => {
      setMatches({ matches: e.matches })
    })
  }, [matches.matches])
  return (
    <div>
      {console.log(matches)}
      {matches.matches && (
        <div className='parent' fluid>
          <Container className='product-details-container-img' fluid>
            <Row className='PDC-row-1'>
              <Col md={1}></Col>
              <Col md={4}>
                <Image src={productObject.img1} fluid></Image>
              </Col>
              <Col md={4}>
                <Image src={productObject.img2} fluid></Image>
              </Col>
            </Row>
            <Row className='PDC-row-2'>
              <Col md={1}></Col>
              <Col md={4}>
                <Image src={productObject.img3} fluid></Image>
              </Col>

              <Col md={4}>
                <Image src={productObject.img4} fluid></Image>
              </Col>
            </Row>
          </Container>
          <Container className='product-details-container-info' fluid>
            <Col md={12} className='product-desc-row-1'>
              <Row>
                <Col>
                  <h2>{productObject.name}</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge variant='secondary'>{productObject.rating}</Badge>
                  <Badge variant='secondary'>{productObject.gender}</Badge>
                  <Badge variant='secondary'>{productObject.type}</Badge>
                </Col>
              </Row>
              <Row className>
                <Col className='price-row'>
                  <h3>Rs. {productObject.price}</h3>
                </Col>
              </Row>
              <Row></Row>
              <Row className='select-size-text'>
                <Col>Please select your size</Col>
              </Row>

              <Row className='size-selector-group'>
                <Col className='size-selector-col'>
                  <ButtonGroup className='individual-size-selector' fluid>
                    {productObject.sizes.length > 3
                      ? productObject.sizes.slice(0, 3).map((el) => (
                          <Button
                            variant='outline-dark'
                            className='size-button'>
                            {el}
                          </Button>
                        ))
                      : productObject.sizes.map((el) => (
                          <Button
                            variant='outline-dark'
                            className='size-button'>
                            {el}
                          </Button>
                        ))}
                  </ButtonGroup>
                </Col>
              </Row>

              <Row className='size-selector-group'>
                <Col className='size-selector-col'>
                  <ButtonGroup className='individual-size-selector' fluid>
                    {productObject.sizes.length > 3
                      ? productObject.sizes
                          .slice(3, productObject.sizes.length)
                          .map((el) => (
                            <Button
                              variant='outline-dark'
                              className='size-button'>
                              {el}
                            </Button>
                          ))
                      : null}
                  </ButtonGroup>
                </Col>
              </Row>

              <Row className='buy-button-row'>
                <Col>
                  <Button variant='dark' className='buy-button'>
                    Buy now
                  </Button>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
      )}
      {!matches.matches && (
        <div>
          <div className='parent' fluid>
            <Container fluid>
              <Carousel>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={productObject.img1}
                    alt='First slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={productObject.img2}
                    alt='Third slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={productObject.img3}
                    alt='Third slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={productObject.img4}
                    alt='Third slide'
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
            <Container fluid>
              <h2 className='product-name'>{productObject.name}</h2>
              <Row>
                <Col>
                  <Badge variant='secondary'>{productObject.rating}</Badge>
                  <Badge variant='secondary'>{productObject.gender}</Badge>
                  <Badge variant='secondary'>{productObject.type}</Badge>
                </Col>
              </Row>
              <Row>
                <Col className='price-row'>
                  <h3>Rs. {productObject.price}</h3>
                </Col>
              </Row>
              <Row className='select-size-text'>
                <Col>Please select your size</Col>
              </Row>
              <Row className='size-selector-group'>
                <Col className='size-selector-col'>
                  <ButtonGroup className='individual-size-selector' fluid>
                    {productObject.sizes.length > 3
                      ? productObject.sizes.slice(0, 3).map((el) => (
                          <Button
                            variant='outline-dark'
                            className='size-button'>
                            {el}
                          </Button>
                        ))
                      : productObject.sizes.map((el) => (
                          <Button
                            variant='outline-dark'
                            className='size-button'>
                            {el}
                          </Button>
                        ))}
                  </ButtonGroup>
                </Col>
              </Row>

              <Row className='size-selector-group'>
                <Col className='size-selector-col'>
                  <ButtonGroup className='individual-size-selector' fluid>
                    {productObject.sizes.length > 3
                      ? productObject.sizes
                          .slice(3, productObject.sizes.length)
                          .map((el) => (
                            <Button
                              variant='outline-dark'
                              className='size-button'>
                              {el}
                            </Button>
                          ))
                      : null}
                  </ButtonGroup>
                </Col>
              </Row>

              <Row className='buy-button-row'>
                <Col>
                  <Button variant='dark' className='buy-button'>
                    Buy now
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, { getAllProducts })(ProductDetailsPage)
