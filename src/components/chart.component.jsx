import React from 'react'
import { Container } from 'react-bootstrap'
import {HorizontalBar } from 'react-chartjs-2'
import {connect} from 'react-redux'
import {getAllProducts} from '../redux/product/productActions'



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const VerticalBar = (props) => {

    const sortedData = props.products.data.sort((a,b)=> (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0)).slice(0,5)

    const labelData = sortedData.map(el => el.name)
    
    const countData = sortedData.map(el => el.count)
    console.log(labelData)
    console.log(countData)
    const data = {
        labels: labelData,
        datasets: [
          {
            label: '# of Votes',
            data: countData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

    return(
  <Container md={2} className='trending-div' fluid>
    <HorizontalBar data={data} options={options} />
  </Container>
)}

const mapStateToProps = state => ({
    products : state.products.items
  })

export default connect(mapStateToProps,{getAllProducts})(VerticalBar)