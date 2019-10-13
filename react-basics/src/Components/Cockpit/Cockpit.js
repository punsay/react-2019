import React, { useEffect } from "react";

const cockpit = props => {
  useEffect(()=>{
    console.log('[cockpit.js] useEffect');
    return () => {
      console.log('[Cockpit.js] cleanUpwork in UseEffect');
    }
  },props.persons);
  return (
    <div>
      <h1>Hi, I am react App!</h1>
      <button onClick={props.toggle}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
