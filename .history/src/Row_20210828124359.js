import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([])

  const base_url = 'https://image.tmdb.org/t/p/original/'

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
      <div className='row__posters'>
        {' '}
        {movie.map((movie) => (
          <img
            className={`"row__poster" ${isLargeRow && 'row__posterLarge'}`}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
