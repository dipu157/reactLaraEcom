import React from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  const history = useNavigate();
  
  function logout() {
    localStorage.clear();
    history('/register');
  }

  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Com</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
            {
              localStorage.getItem('user-info') ?
              <>
                <Link to="/">Product List</Link>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
              </> :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            }           
          </Nav>
          {
              localStorage.getItem('user-info') ?
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav> : null }
        </Container>
      </Navbar>
    </div>
  )
}
