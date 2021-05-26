import logo from "./logo.svg";
import "./App.css";
import Template from "./Template";
import Search from "./Search";
import Form from "./Form";
import {Component } from "react";
import { InputAdornment } from "@material-ui/core";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

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
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2">
        <Template name="Goa"/></div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2">
        <Template name="Dehradun"/></div>
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2">
        <Template name="Munich"/></div>
        
        
      </div>
    </div>
  );
}
 export default App;
