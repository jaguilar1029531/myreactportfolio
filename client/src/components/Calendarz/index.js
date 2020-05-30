import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";


const Calendarz = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
      setDate(date)
  };
  
  const tileContent = ({ date, view }) => view === "month" && date.getDay() === 3 ? <p>Bitcoin 101</p> : null;
  return <div>
    
      <h1 style={{fontSize: 24}}><b>CHECK OUT OUR EVENT CALENDAR</b></h1>
      <br></br>
      <h1>Click on an event to RSVP or to read more information</h1>
      <br></br>
    

    <div style={{ height: 400}}>
    <Link to={"/bitcoin101"}>
                     
    <Calendar tileContent={tileContent} onChange={onChange} value={date} />
    {date.toString()}
                    </Link>  
    </div>
      <br></br>
  </div>
} ;

export default Calendarz;