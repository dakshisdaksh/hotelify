import React, { Component } from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    }
  }
  handleUsernameChange = (event) => {
    this.setState = {
      username: event.target.value,
    };
  };
  render() { 
    return (
      <form>
        <input
          type="text"
          placehlder="firstname"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        ></input>
      </form>
    );
  }
}




// export default function Form() {
//
//     const [ratings, setRatings ] = useState();

//     return(
//         <form onSubmit={set}>

//         </form>
//     )
// }
