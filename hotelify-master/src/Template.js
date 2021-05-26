import React, {useState} from 'react';
import { render } from 'react-dom';
//import { ItemAssignmentContext } from 'twilio/lib/rest/numbers/v2/regulatoryCompliance/bundle/itemAssignment';
import './template.css';



export default function Template(props) {
    console.log(props.name);
    const hotel = {
        name: "ABC",
        info: ['wifi', 'parking', 'breakfast']
    };
 return(
 <div className="frame3">
     <div className="icon">
         <div className="image"></div>
         <h3>Hotel: {props.name}</h3>
         <ul className="hotelinfo">
            {hotel.info.map((item) => <li> {item}  </li>)}
         </ul>

         <a href="#" class="btn btn-outline-light" target="_blank">BOOK NOW</a>
     </div>
 </div>

 );
 }