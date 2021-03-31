import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      {/* Container indents what's inside away from the outskirts of the web page*/}
      <Container>
        <Row>
          <Col className="Footer_center text-center py-3">
            Copyright &copy; Merch Store
            <p>Developed by Jzavier Timm & Joe Kofler</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
