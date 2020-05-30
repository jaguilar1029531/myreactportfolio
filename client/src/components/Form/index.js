import React from "react";

// This file exports the Input, TextArea, and FormBtn components


    
  
    

export function Input(props) {
  return (
    <div  className="rounded mx-auto d-block" style={{width: 500}}>
      <input className="input is-primary" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div  className="rounded mx-auto d-block" style={{width: 500}}>
      <textarea className="input is-primary" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  
  return (
    <button {...props} style={{ marginBottom: 10 }} className="button is-primary">
      {props.children}
      
    </button>
    
    
    
  );
}
