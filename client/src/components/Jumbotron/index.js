import React from "react";

function Jumbotron({ children }) {
  return (
    
      
    
    <section className="hero is-info is-bold" style={{textAlign: "center", alignContent: "center"}}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          GLOBAL INTEGRITY
        </h1>
        <h2 className="subtitle">
          Book our Services Today!
        </h2>
      </div>
    </div>
    {children}
  </section>
  );
}

export default Jumbotron;
