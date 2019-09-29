import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = (props) => {
    const style = {
        '@media (min-width:991px)':{
            width:'500px',
            boxShadow:'2px #aaa',
            background:'salmon',
        }
    };
      return  <div className="person" style={style}>
                  <p onClick= {props.click}>I am {props.name} and {props.age} years ! {props.children}</p>
                  <input onChange={props.changed} ></input>
              </div>
      /*  I'm a person and I am {Math.floor(Math.random()*30)} years old! */
}
export default Radium(person);