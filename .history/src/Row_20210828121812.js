import React from 'react'
import './Row.css'

const Row = ({ title }) => {
  return (
    <div className='row'>
      <h2>{title}</h2>
    </div>
  )
}

export default Row
