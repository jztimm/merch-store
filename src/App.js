import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>Welcome to Meach-Store</h1>
      </Container>
      <Footer/>
    </div>
  )
}

export default App
