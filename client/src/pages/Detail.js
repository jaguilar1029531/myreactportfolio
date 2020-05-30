import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [booking, setBooking] = useState({})

  // When this component mounts, grab the booking with the _id of props.match.params.id
  // e.g. localhost:3000/bookings/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBooking(id)
      .then(res => setBooking(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Thank you for your bookings, {booking.title}
                
              </h1>
              <br></br>
            </Jumbotron>
          </Col>
          
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <br></br>
              <h1>Your Message:</h1>
              <br></br>
              <p>
                {booking.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Bookings Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
