import { useState } from "react";
import { ReactComponent as Star } from "./assets/-favourite-star.svg";
import "./search.css";

export default function Search() {
  const [star, setStar] = useState(0);
  console.log(star);
  return (
    <div className="searchbar">
      <div className="progress">
      </div>
      <div className="grey">
        {/* <h3>Stars selected: {star}</h3> */}
        <h3> Reviews </h3>
        <div className="stars">
            <Star onClick={() => {setStar(1); }}/>
            <Star onClick={() => {setStar(2); }}/>
            <Star onClick={() => {setStar(3); }}/>
            <Star onClick={() => {setStar(4); }}/>
            <Star onClick={() => {setStar(5); }}/>
          </div>
        </div>
      </div>
  );
}
