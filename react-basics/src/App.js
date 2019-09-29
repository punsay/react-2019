import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:"Priya", age:"21"},
      {name:"Punsay", age:"22"},
      {name:"Mona", age:"25"}
    ],
     showPersons : false,
  }

  switchNameHandler = () => {
    this.setState({
      persons : [
        {name:"Sameera", age:25},
        {name:"Kiran", age:25},
        {name:"Kiara", age:"25"}
      ]
    });
  }

  onChangedHandler = (event) => {
    this.setState({
      persons : [
        {name:"Sameera", age:25},
        {name:event.target.value, age:25},
        {name:"Kiara", age:"25"}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow,
    });
  }

  deletePersonsHandler = (personIndex) => {
    console.log("delete persons handler");
    /* let persons = this.state.persons.slice(); */
    let persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons});
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = 
        (
          <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person name = {person.name}
                            age = {person.age}
                            click = {()=> this.deletePersonsHandler(index)} />
            })
          }
          </div>
        )
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
    return(
      <div className="App">
        <div>
          <h1>Hi, I am react App!</h1>
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </div>
    );
    /* TODO: if i am not using JSX below is the code */
    /* return React.createElement('div',{className:'App'} ,React.createElement('h1',null,'hi, I\'m a react app!')); */
  }
}
export default App;
