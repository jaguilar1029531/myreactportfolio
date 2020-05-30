import React from "react";
import pic4 from "./daglobe.jpeg";

function Nav() {
  return (
    <div>
<div className="navbar-brand"></div>
  <div id="navbarBasicExample" className="navbar-menu"></div>
    <div className="navbar-start">
    <a href="/" className="navbar-item"> 
      <img src={pic4} alt="a globe" ></img>
    </a>
    <a href="/" className="navbar-item">
    
                      <strong>
                      Home
                      </strong>
                    
        </a>
        <a href="/events" className="navbar-item">
  
                      <strong>
                      Events
                      </strong>
                        
        </a>
        <a href="/reviews" className="navbar-item">
   
                      <strong>
                      Reviews
                      </strong>
                      
        </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a href="/" className="navbar-link">
       
                      <strong>
                      Services
                      </strong>
               
        </a>
        <div className="navbar-dropdown">
        <a href="/cataloging" className="navbar-item">
         
                      <strong>
                      Cataloging
                      </strong>
                 
          </a>
          <a href="/consultation" className="navbar-item">
          
                      <strong>
                      Consultation
                      </strong>
                  
          </a>
          <a href="/dataproduction" className="navbar-item">
         
                      <strong>
                      Dataproduction
                      </strong>
                
          </a>
          <a href="/goglobal" className="navbar-item">
          
                      <strong>
                      Goglobal
                      </strong>
                   
          </a>
          <a href="/resumeservices" className="navbar-item">
          
                      <strong>
                      Resumeservices
                      </strong>
                
          </a>
          <a href="/websites" className="navbar-item">
         
                      <strong>
                      Websites
                      </strong>
             
          </a>
          <hr className="navbar-divider"></hr>
          <a href="/issuereport" className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Nav;
