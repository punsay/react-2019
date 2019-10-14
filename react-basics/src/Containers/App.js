import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("app.js CONSTRUCTOR");
  }
  state = {
    persons: [
      { id: "13", name: "AngelPriya", age: "21" },
      { id: "12", name: "Punsay", age: "22" },
      { id: "14", name: "Mona", age: "25" }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter:0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("app.js getDerivedStatefromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Sameera", age: 25 },
        { name: "Kiran", age: 25 },
        { name: "Kiara", age: "25" }
      ]
    });
  };

  /*  componentWillMount = () => {
    console.log("app.js component will mount");
  }
 */
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    console.log("person...", person);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    /* const person = Object.assign({},this.state.persons[personIndex]) */

    (person.name = event.target.value),
      this.setState({
        persons:person,
        changeCounter:this.state.changeCounter+1
      });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonsHandler = personIndex => {
    /* let persons = this.state.persons.slice(); */
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    console.log("app.js render");
    let persons = null;

    if (this.state.showPersons) {
      console.log("^^^^^^",this.state.persons);
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <div>
            <button
              onClick={() => {
                this.setState({ showCockpit: false });
              }}
            >
              Remove Button
            </button>
            {this.state.showCockpit ? (
              <Cockpit
                toggle={this.togglePersonsHandler}
                persons={this.state.persons}
              />
            ) : null}
            {persons}
          </div>
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
