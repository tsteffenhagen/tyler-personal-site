import React, { Component } from 'react';
import FA from 'react-fontawesome';
import Footer from '../Footer/Footer';
import image from '../../images/carousel1.png';
import image2 from '../../images/carousel2.png';
import { Carousel } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Background from '../../images/home.png';

const bgColors = {
  "Blue": "#00B1E1"
};

var sectionStyle = {
  height: "725px",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

var centerSectionStyle = {
  textAlign: "center"
};


export default class HomePage extends Component {
  render() {
    return (
      <div>

        <header>
        </header>
        <Grid className="fluid">

          <Row >
            <Col md={12} style={centerSectionStyle}>
              <h1> Welcome </h1>
            </Col>
          </Row>

          <Row >
            <Col md={1}>
            </Col>
            <Col md={10} style={centerSectionStyle}>
              <p>Hi my name is Tyler Steffenhagen and welcome to my site. Feel free to click around and
                explore the site I hope that you find something of interest to you. The site is currently
                a work in progress and I look forward to adding more features such as a section for my blog
                and other sites of my own creation as time allows. Feel free to contact me at any of the links below. </p>
            </Col>
            <Col md={1}>
            </Col>
          </Row>

          <hr />

          <Row >
            <Col md={12} style={centerSectionStyle}>
              <h2> Projects / Portfolio </h2>
            </Col>
          </Row>

          <Row >
            <Col md={1}>
            </Col>

            <Col md={10} style={centerSectionStyle}>
              <p>Here are some examples of my work. </p>
            </Col>

            <Col md={1}>
            </Col>
          </Row>

        </Grid>
        <Footer />
      </div>
    )
  }
}