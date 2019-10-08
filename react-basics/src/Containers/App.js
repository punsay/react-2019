import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import "./App.css";
import Persons from "../Components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "13", name: "AngelPriya", age: "21" },
      { id: "12", name: "Punsay", age: "22" },
      { id: "14", name: "Mona", age: "25" }
    ],
    showPersons: false
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Sameera", age: 25 },
        { name: "Kiran", age: 25 },
        { name: "Kiara", age: "25" }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      console.log("id", id);
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    console.log("printing the object person : ", person);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    /* const person = Object.assign({},this.state.persons[personIndex]) */

    (person.name = event.target.value),
      this.setState({
        persons
      });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonsHandler = personIndex => {
    console.log("delete persons handler");
    /* let persons = this.state.persons.slice(); */
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
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
            <h1>Hi, I am react App!</h1>
            <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
          </div>
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
