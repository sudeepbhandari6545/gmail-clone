import React from 'react'
//icons
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
  const dispatch = useDispatch()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          }),
        )
      })
      .catch((error) => alert(error.message))
  }

  return (
    <>
      <div className="login">
        <div className="login_container">
          <img
            src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
            alt="gmail logo"
          />
          <Button variant="contained" color="primary" onClick={signIn}>
            Login
          </Button>
        </div>
      </div>
    </>
  )
}

export default Login
