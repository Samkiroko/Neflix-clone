import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovie(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
    </div>
  )
}

export default Row
