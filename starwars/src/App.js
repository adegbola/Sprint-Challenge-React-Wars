import React, { useState, useEffect } from 'react'
import Characters from './components/Characters.js'
import axios from 'axios'
import './App.css'
import './components/MovieCharacter.css'

const App = () => {
  const [MovieData, setData] = useState([])
  const grab = () => {
    axios
      .get('https://swapi.co/api/people/?format=json')
      .then(response => {
        setData(response.MovieData.results)
      })
      .catch(error => {
        console.log('Error: Please try again later')
      })
  }

  useEffect(grab, [])

  console.log(MovieData)

  if (MovieData.length === 0) {
    return <h1>loading Movie Characters...</h1>
  }

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <div className='MovieCards'>
        {MovieData.map((item, index) => {
           return (
             <Characters
               key={index}
               name={item.name}
               birth_year={item.birth_year}
               hair_color={item.hair_color}
               height={item.height}
               eye_color={item.eye_color}
               gender={item.gender} />
           )
         })}
      </div>
    </div>
  )
}

export default App;
