import React from 'react';
const person = (props) => {
      return  <div>
                  <p>I am {props.name} and {props.age} years ! {props.children}</p>
                  <input onChange={props.changed} ></input>
              </div>
      /*  I'm a person and I am {Math.floor(Math.random()*30)} years old! */
}

export default person;