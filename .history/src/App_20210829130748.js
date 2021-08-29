import React from 'react'
import './App.css'
import HomeScreen from './HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router className='app'>
      <Switch>
        <Route>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
