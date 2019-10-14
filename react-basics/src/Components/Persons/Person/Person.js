import React, {Component} from "react";
import Radium from "radium";
import Aux from "../../../hoc/Aux"
import "./Person.css";
class Person extends Component {
  render () {
    /* const style = {
      "@media (min-width:991px)": {
        width: "500px",
        boxShadow: "2px #aaa",
        background: "salmon"
      }
    }; */
    console.log("person.js rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and
          {this.props.age} years ! {this.props.children}
        </p>
        <input onChange={this.props.changed}></input>
      </Aux>
    );
    /*  I'm a person and I am {Math.floor(Math.random()*30)} years old! */
  }
};
export default Radium(Person);
