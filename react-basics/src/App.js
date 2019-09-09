import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:"Priya", age:"21"},
      {name:"Punsay", age:"22"},
      {name:"Mona", age:"25"}
    ]
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

  render() {
    return(
      <div className="App">
        <div>
          <h1>Hi, I am react App!</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
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
        </div>
      </div>
    );
    /* TODO: if i am not using JSX below is the code */
    /* return React.createElement('div',{className:'App'} ,React.createElement('h1',null,'hi, I\'m a react app!')); */
  }
}
export default App;
