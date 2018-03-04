import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Navbar inverse staticBottom className="App-footer">
        <Nav>
          <NavItem>
            <div>
              <a href="https://github.com/tsteffenhagen" target="_blank"> GitHub </a>
              <a href="https://www.linkedin.com/in/tyler-steffenhagen-654a46153" target="_blank"><Button bsStyle="link">LinkedIn</Button></a>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}


