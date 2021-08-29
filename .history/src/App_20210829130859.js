import React from 'react'
import './App.css'
import HomeScreen from './HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router className='app'>
      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
