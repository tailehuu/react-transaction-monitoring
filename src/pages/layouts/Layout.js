import React from "react"

import { Container, Row } from "react-bootstrap"

import Header from "../../components/Header"
import SideBar from "../../components/SideBar"

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Row>
          <SideBar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Layout