import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import {Navbar , Nav }from 'react-bootstrap';

import Footer from './components/Footer'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Ahren Swett',
      headerLinks: [
        {title: 'Home' , path: "/"},
        {title: 'About' , path: "/about"},
        {title: 'Contact' , path: "/contact"}
      ],
      home: {
        title: "Creating the Bleeding-Edge",
        subTitle: "Come join the llama party",
        text: "Checkout my work below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Connect",
        subTitle: "Come join the llama party",
        text: "Checkout my work below"
      }
    }
  }


  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Ahren Swett</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="nabar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Footer>

          </Footer>
        </Container>
      </Router>
    );
  }
}

export default App;
