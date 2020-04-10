import React from 'react';
import Image from 'react-bootstrap/Image'

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Header = () => {

  return (
    <header>
      <Container>
        <Row>
          <Col sm={3}>
            <Image src={require("../images/ydkjhead-small.png")} fluid alt={"You Don't Know Jack head"} />
          </Col>
          <Col>
            <h2>Unofficial Jackbox selector</h2>

            <Link to="/">Home</Link><Link to="/about">About</Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;