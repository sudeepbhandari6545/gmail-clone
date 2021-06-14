import React from 'react'
//react router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import SendMail from './SendMail'
import Login from './Login'

//components
import Header from './Header'
import SideBar from './SideBar'
import Mail from './Mail'
import EmailList from './EmailList'
import { useDispatch, useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice'
import { useEffect } from 'react'
import { auth } from './firebase'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          }),
        )
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  )
}

export default App
