import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import pic1 from "./images/anonymoususer.png";
import pic2 from "./images/jwow.jpeg";
import pic3 from "./images/kirsh.jpeg";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import emailjs from "emailjs-com";

function Reviews() {

  // Setting our component's initial state
  const [reviews, setReviews] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadReviews()
  }, [])

  // Loads all books and sets them to books
  function loadReviews() {
    API.getReviews()
      .then(res => 
        setReviews(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    
    event.preventDefault();
    if (formObject.name && formObject.service && formObject.review) {
      API.saveReview({
        name: formObject.name,
        service: formObject.service,
        review: formObject.review,
        linkedin: formObject.linkedin
      })
        .then(alert("FORM SUBMITTED, THANK YOU FOR YOUR FEEDBACK!"))
        .then(res => loadReviews())
        .catch(err => console.log(err));
    }
    emailfunction();
  };
  function emailfunction() {

  var templateParams = {
      
  }
    
    emailjs.send('default_service', 'reviewtemplate', templateParams, "user_cik0Rx7PoC1jSZScZR0Em")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
  }
  return (
    <Container fluid>
        <Row>
          <Col size="lg-12">
            
              
            
            <Jumbotron>
              <h3>Leave a review about your experience with Global Integrity</h3>
              <br></br>
            <form style={{marginLeft:25}}>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Your Name (Input Required)"
              />
              <Input
                onChange={handleInputChange}
                name="service"
                placeholder="Which service(s) did you use? (Input Required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="review"
                placeholder="Your Review (Input Required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="linkedin"
                placeholder="LinkedIn profile address (Optional)"
              />
              <br></br>
              <FormBtn
                disabled={!(formObject.name && formObject.service && formObject.review)}
                onClick={handleFormSubmit}
                
              >
                Submit Your Review!
              </FormBtn>
            </form>
            </Jumbotron>
            <br></br>
          </Col>
         
        </Row>
      <Row>
        <Col size="lg-12">
          <div><div className="card"></div>
        <div className="card-image"></div>
        <br></br>
           <strong>REVIEWS</strong>
           <hr></hr>
           {reviews.length ? (
              <List>
                {reviews.map(review => (
                  <ListItem key={review._id}>
                    
                    <div className="card-content"></div>
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={pic1} alt="a reviewer"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{review.name}</p>
              <p><b>{review.name}</b> booked the <b>{review.service}</b> service.</p>
              <br></br>
              <p><a href={review.linkedin}>Visit {review.name}'s Linkedin Profile</a></p>
            </div>
          </div>
          <div className="content">
          {review.review}
          <br></br>
          <br></br>
            
            <p>{review.date}</p>
            
            </div>
                  </ListItem>
                ))}

              <ListItem>
              <div className="card-content"></div>
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={pic2} alt="a reviewer"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Jesse Shaffer</p>
              <p><b>Jesse Shaffer</b> booked the <b>Go Global</b> service.</p>
              <br></br>
              <p><a href="https://www.linkedin.com/in/jesse-shaffer-839083181/">Visit Jesse's Linkedin Profile</a></p>
            </div>
          </div>
      
          <div className="content">
          Long story short: I was just treading water at a dead end job for almost a decade before clicking on a fb ad and actually getting something useful out of it, now I'm on the precipice of getting my real estate license, buying a duplex with my brother, and starting a business with my closest friends.

I was working a customer service job and had been for almost a decade. After seeing the Global Integrity Marketing ad, and getting alot of help from George, I started trying new things more often to try and help myself financially. I got into a mindset of accepting failure and a willingness to at least try. Really the idea that doing anything, even a little, is better than inaction, helped the most. I tried and learned lots of things over the last 3 years with George. From light Linux coding on masternodes, to sales development, to real estate.

After trying several things and learning what I like and what I don't like to spend my time on, I finally found the things that's really getting my juices pumping! I'm about to embark on a decade of financial growth that would never have been possible if, weirdly enough, I hadn't clicked a random ad I saw on Facebook.

Tl:Dr used to be stuck in dead end job. Now - have a marketable sales development skill, buying a duplex to landlord with my brother soon, and getting my real estate license.
          <br></br>
          <br></br>
            
            <p>2 Apr 2020</p>
            
            </div>
              </ListItem>
              <ListItem>
                
            <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={pic3} alt="a reviewer"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Kirsha Del Pino</p>
              <p><b>Kirsha Del Pino</b> booked the <b>Customized Hardware</b> service.</p>
              <br></br>
              <p><a href="https://www.linkedin.com/in/kirshadelpino/">Visit Kirsha's Linkedin Profile</a></p>
            </div>
          </div>
      
          <div className="content">
          George is extremely professional and I enthusiastically recommend his customized computer solutions. He managed the sales process from end to end and made sure I understood my options. Likewise George clearly outlined the steps to implementation and provided regular status updates. George exceeded my expectations once the system was built and through cost savings he was able to achieve, actually delivered more than promised. He continues to provide excellent service to my account and is available to answer questions. Although I know he has many clients, he treats my account as a priority. 
          <br></br>
          <br></br>
            
            <p>2 Apr 2020</p>
            <hr></hr>
            </div>
              </ListItem>
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        
            </div>
          
         
         
        </Col>
      </Row>
      
    </Container>
  );
}

export default Reviews;
