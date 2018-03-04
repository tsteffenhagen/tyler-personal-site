import React, { Component } from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';
import Footer from '../Footer/Footer';

var rightSectionStyle = {
    textAlign: "right"
};

var leftSectionStyle = {
    textAlign: "left"
};

var centerSectionStyle = {
    textAlign: "center"
};


export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <Grid>

                    <Row>

                    <Col md={12} style={centerSectionStyle}>
                    <h2>Blog Coming Soon</h2>
                    </Col>
                    </Row>

                    <Row>
                    <Col md={3}>
                    </Col>

                    <Col md={6}>
                        <ProgressBar>
                            <ProgressBar active bsStyle="success" now={35} key={1} />
                            <ProgressBar active bsStyle="warning" now={25} key={2} />
                        </ProgressBar>
                    </Col>

                    <Col md={3}>
                    </Col>
                    </Row>

                </Grid>
                <Footer />
            </div>
        )
    }
}