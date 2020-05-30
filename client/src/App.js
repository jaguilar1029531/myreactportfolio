import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bookings from "./pages/Bookings";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Reviews from "./pages/Reviews";
import Websites from "./pages/Websites";
import Resumeservices from "./pages/Resumeservices";
import Cataloging from "./pages/Cataloging";
import Dataproduction from "./pages/Dataproduction";
import Goglobal from "./pages/Goglobal";
import Consultation from "./pages/Consultation";
import Events from "./pages/Events";
import Bitcoin101 from "./pages/Bitcoin101";
import Issuereport from "./pages/Issuereport";


function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <article className="message">
  <div className="message-header">
    <p>Welcome to our Organization</p>
    
  </div>
  <div className="message-body">
  <strong>COVID-19 UPDATE</strong> - All bookings take place via teleconference until further notice. Thank you for your patience. FOR MORE INFORMATION ABOUT COVID-19 VISIT  <a href="https://www.coronavirus.gov/">CORONAVIRUS.GOV</a> 
  </div>
</article>
        <Switch>
          <Route exact path="/">
            <Bookings />
          </Route>
          <Route exact path={["/bookings/:id", "/bookings"]}>
            <Detail />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/bitcoin101">
            <Bitcoin101 />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/websites">
            <Websites />
          </Route>
          <Route exact path="/goglobal">
            <Goglobal />
          </Route>
          <Route exact path="/consultation">
            <Consultation />
          </Route>
          <Route exact path="/cataloging">
            <Cataloging />
          </Route>
          <Route exact path="/resumeservices">
            <Resumeservices />
          </Route>
          <Route exact path="/dataproduction">
            <Dataproduction />
          </Route>
          <Route exact path="/issuereport">
            <Issuereport />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>Global Integrity</strong> by <a href="https://www.linkedin.com/in/george-aguilar-176414199/">Jorge Aguilar</a>. This project was made in the memory of Arbron James - Kyle Marsalis - Zach Mitchell - Abel Lowry - Chris Saucedo and many others.
       
    </p>
  </div>
</footer>
      </div>
    </Router>
    
  );
}

export default App;
