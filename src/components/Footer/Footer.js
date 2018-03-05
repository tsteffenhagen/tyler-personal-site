import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Navbar inverse staticBottom className="App-footer">
        <Nav>
          <div>
            <Navbar.Collapse>
              <Navbar.Text>
                <Navbar.Link href="https://github.com/tsteffenhagen" target="_blank">Github</Navbar.Link>
              </Navbar.Text>

              <Navbar.Text>
                <Navbar.Link href="https://www.linkedin.com/in/tyler-steffenhagen-654a46153" target="_blank">Linkedin</Navbar.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </div>
        </Nav>
      </Navbar>
    )
  }
}


