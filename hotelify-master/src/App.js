import logo from "./logo.svg";
import "./App.css";
import Template from "./Template";
import Search from "./Search";
import Form from "./Form";
import {Component } from "react";

const renderPost = async () => {
  let uri = "http://localhost:5000/hotel";
  const res = await fetch(uri);
  const list = await res.json();

  const array2= list.map(function(x){
    var dr= "dist_rail";
    var da= "dist_air";
    console.log([x[dr], x[da]]);
    return([x[dr], x[da]]);
  });
 };

function App() {
  renderPost();

  return (
    <div className="App">
      <header className="App-header">
       <Search />
        <Form/>
        </header>
        <div className="row">
        <Template name="Goa"/>
        <Template name="Dehradun"/>
        <Template name="Munich"/>
      </div>
    </div>
  );
}
 export default App;
