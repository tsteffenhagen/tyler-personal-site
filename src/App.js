import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import FA  from 'react-fontawesome';
import {Button, Navbar, Nav, NavItem} from 'react-bootstrap';
import Background from './images/home.png'
import Footer from './components/Footer/Footer';



import AboutPage from './components/AboutPage/AboutPage'
import ResumePage from './components/ResumePage/ResumePage'
import HomePage from './components/HomePage/HomePage'
import BlogPage from './components/BlogPage/BlogPage'
var sectionStyle = {
  height: "725px",
  background: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <header className="App-header" style={ sectionStyle }>
        <Navbar inverse fixedTop>
          <Navbar.Header>
          <h1 className="App-title">Tyler Steffenhagen</h1>
            </Navbar.Header>
            <Nav>
              <NavItem>
          <div>
            <Link to=""><Button bsStyle="link"><h5>Home</h5></Button></Link>
            {"|"}
            <Link to="about"><Button bsStyle="link"><h5>About Page</h5></Button></Link>
            {"|"}
            <Link to="resume"><Button bsStyle="link"><h5>Resume</h5></Button></Link>
            {"|"}
            <Link to="blog"><Button bsStyle="link"><h5>Blog</h5></Button></Link>
          </div>
          </NavItem>
          </Nav>
          </Navbar>
        </header>

        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage}/>
          <Route path='/resume' component={ResumePage}/>
          <Route path='/blog' component={BlogPage}/> 
        </div><br/>

        <footer>
        <Footer />
        </footer>
      </div>

      </Router>
    );
  }
}

export default App;
