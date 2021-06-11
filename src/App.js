import React from 'react'
//react router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

//components
import Header from './Header'
import SideBar from './SideBar'
import Mail from './Mail'
import EmailList from './EmailList'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <SideBar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
