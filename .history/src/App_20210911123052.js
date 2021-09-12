import React, { useEffect } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import { auth } from './firebase'

function App() {
  const user = null
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('no user')
      }
    })
  }, [])
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  )
}

export default App