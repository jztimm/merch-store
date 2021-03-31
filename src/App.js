import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Header />
      {/* py-3 give padding on top and botton */}
      <main className="py-3">
        <Container>
          <h1>Welcome to Meach-Store</h1>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App
