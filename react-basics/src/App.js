import React, { Component } from "react";
import Radium, {StyleRoot} from "radium";
import "./App.css";
import Person from "./Person/Person";

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
      console.log("id",id);
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    console.log("printing the object person : ", person);
    
    person.name= event.target.value;

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
      console.log("key");
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonsHandler(index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    /* {
      this.state.showPersons ?
      <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          />
        <Person 
        name={this.state.persons[1].name}  
        age={this.state.persons[1].age} 
        changed={this.onChangedHandler} >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name}  
          age={this.state.persons[2].age} 
        />
      </div> : "sorry nothing to show"
    } */
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
    /* TODO: if i am not using JSX below is the code */
    /* return React.createElement('div',{className:'App'} ,React.createElement('h1',null,'hi, I\'m a react app!')); */
  }
}
export default Radium(App);
