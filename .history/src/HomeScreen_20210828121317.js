import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'
import request from './Request'
import Row from './Row'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchNetflixOriginals} isLargeRow />
    </div>
  )
}

export default HomeScreen
