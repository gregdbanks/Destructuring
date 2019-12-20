import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {

  // -----------BEFORE------------
  // const person = {};
  // person.name = "Ophelia";
  // person.age = 22;
  // person.gender = "female";
  // person.talent = "singer";

  // alert(person.name);

  // const name = person.name;
  // const age = person.age;

  // alert(name)
  // -----------AFTER--------------
  // const person = {
  //   name: "Ophelia",
  //   age: 22,
  //   gender: "female",
  //   talent: "singer"
  // };

  // alert(person.name);

  // const name = person.name;
  // const age = person.age;

  // alert(name)

  // -----------EVEN MORE DESTRUCTURING--------------
  // const person = {
  //   name: "Ophelia",
  //   age: 22,
  //   gender: "female",
  //   talent: "singer"
  // };

  // alert(person.name);

  // -----------BEFORE------------
  // const name = person.name;
  // const age = person.age;
  // const talent = person.talent;
  // -----------AFTER--------------
  // STRANGE I KNOW
  // IF YOU WANT TO **ADD PROPERTIES DO IT ON THE RIGHT SIDE OF THE EQUAL SIGN, 
  // IF YOU WANT TO **EXTRACT PROPERTIES FROM AN OBJECT, DO IT ON THE LEFT SIDE 
  // OF THE EQUAL SIGN.
  // const { name, age, talent } = person;

  // alert(talent)

  // YOU CAN ALSO DESTRUCTURE THE RESULTS OF FUNCTION INVOCATIONS

  // function getPerson () {
  //   return {
  //     name: 'Ophelia',
  //     age: 22,
  //     talent: 'singer',
  //     gender: "female"
  //   };
  // }
  
  // const { name, age, talent, gender } = getPerson();

  // alert(gender);

  // YOU CAN ALSO DESTRUCTURE ARRAYS!!!
  // const personArr = ['Ophelia', 22, 'singer', 'female'];

  // -----------BEFORE------------
  // const name = personArr[0];
  // const age = personArr[1];
  // const talent = personArr[2];
  // const gender = personArr[3];
  // -----------AFTER--------------
  // const [ name, age, talent, gender ] = personArr;

  // alert(name);

  // USE String's .split method to extract data from a string, for ex:

  const csv = `Robber's Cave,Latimer County,Oklahoma,8,9`;
  const [ trail, county, state, difficulty, rating ] = csv.split(',');

  // alert(trail);
  








  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
