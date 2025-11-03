import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import RegisterPage from './components/Form/RegisterPage'
import LoginPage from './components/Form/LoginPage'

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  )
}

export default App


