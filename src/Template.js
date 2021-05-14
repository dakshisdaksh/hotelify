import React, {useState} from 'react';
import { render } from 'react-dom';
import { ItemAssignmentContext } from 'twilio/lib/rest/numbers/v2/regulatoryCompliance/bundle/itemAssignment';
import './template.css';



export default function Template() {
    const hotel = {
        name: "ABC",
        info: ['wifi', 'parking', 'breakfast']
    };
  const [c, setC]= useState(0);
 return(
 <div className="frame3">
     <div className="icon">
         <div className="image"></div>
         <h3>Hotel: {hotel.name}</h3>
         <ul className="hotelinfo">
            {hotel.info.map((item) => <li> {item}  </li>)}

         </ul>

         <div className="btn">
            <p className="btntext"> Book Now </p>
         </div>
     </div>
 </div>
 );
 }