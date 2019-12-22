import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {

  // -ES6 DESTRUCTURING-
  // REDUCE CODE REPITITION WITH ES6's OBJECT AND ARRAY DESTRUCTURING SYNTAX

  // #REAL WORLD USE CASE----------------------------------------------------------

  // > Let’s say we have some deeply nested data like we might get back from a
  // > JSON api:

  // const greg = {
  //   links: {
  //     web: {
  //       blog: 'https://gb-creations.net'
  //     },
  //     social: {
  //       twitter: 'https://twitter.com/robbinbanks1986',
  //       facebook: 'https://www.facebook.com/profile.php?id=100007065967400',
  //       github: 'https://github.com/gregdbanks',
  //       linkedin: 'https://www.linkedin.com/in/greg-banks-864aa569/'
  //     }
  //   },
  //   first: 'Greg',
  //   last: 'Banks',
  // };

  // OLD SCHOOL WAY:---------------------------------------------------------------

  // const twitter = greg.links.social.twitter;
  // const facebook = greg.links.social.facebook;
  // const github = greg.links.social.github;
  // const linkedin = greg.links.social.linkedin;

  // ES6 WAY:----------------------------------------------------------------------

  // const { twitter, facebook, github, linkedin } = greg.links.social;

  // alert(linkedin)

  // LETS DIG A LITTLE DEEPER, FOR EXAMPLE:

  // > To better understand it, let’s take a look at some of the basics
  // > of Javascript objects. To add a single property to an object, you
  // > use dot notation. With dot notation, you can only add properties to an object one at a time.

  // const person = {};
  // person.name = "Ophelia";
  // person.age = 22;
  // person.gender = "female";
  // person.talent = "singer";

  // alert(person.name);

  // const name = person.name;
  // const age = person.age;

  // alert(name)

  // - To add multiple properties to an object at the same time, you would need to
  // - use Javascript’s “object literal notation” when you initialize the object.

  // #For Example:-----------------------------------------------------------------

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

  // #BEFORE-----------------------------------------------------------------------

  // const name = person.name;
  // const age = person.age;
  // const talent = person.talent;

  // #AFTER------------------------------------------------------------------------

  // - STRANGE I KNOW

  // - If you want to ADD properties do it to the right side of the equal sign.,
  // If you want to EXTRACT properties from an object, do it on the left side
  // of the equal sign.

  // const { name, age, talent } = person;

  // alert(talent)

  // #YOU CAN ALSO DESTRUCTURE THE RESULTS OF FUNCTION INVOCATIONS-----------------

  // function getPerson () {
  //   return {
  //     name: 'Ophelia',
  //     age: 22,
  //     talent: 'singer',
  //     gender: "female"
  //   };
  // }

  // const { name, age, talent, gender } = getPerson();

  // alert(gender)

  // #YOU CAN ALSO DESTRUCTURE ARRAYS!!!------------------------------------------

  // const personArr = ['Ophelia', 22, 'singer', 'female'];

  // #BEFORE-----------------------------------------------------------------------

  // const name = personArr[0];
  // const age = personArr[1];
  // const talent = personArr[2];
  // const gender = personArr[3];

  // #AFTER------------------------------------------------------------------------

  // const [ name, age, talent, gender ] = personArr;

  // alert(name)

  // #USE String's .split method to extract data from a string, for ex:------------

  // const csv = `Robber's Cave,Latimer County,Oklahoma,8,9`;
  // const [ trail, county, state, difficulty, rating ] = csv.split(',');

  // in React.js often you want to use destructuring because the data is
  // so deeply nested in props or state.

  // alert(trail)

  // #Say we wanted variable name to be different than extracted property NAME-----

  // const person = {
  //   n: 'Ophelia',
  //   a: 22,
  //   t: 'singer',
  //   g: 'female'
  // };

  // const { n: name, a: age, t: talent, g: gender } = person;
  // alert(name)
  // alert(age)
  // alert(talent)
  // alert(gender)

  // #Up Next: function arguments and parameters------------------------------------

  // > fetch a group of repositories from the Github API.

  // function fetchRepos (language, minStars, maxStars, createdBefore, createAfter) {

  // }

  // > 2 problems with this:

  // function fetchRepos (language, minStars, maxStars, createdBefore, createAfter) {

  // }

  // fetchRepos('JavaScript', 100, null, new Date('01.01.2017').getTime(),null);

  // 1 We need to remember or look up which arguments go in which order

  // 2 We do NOT know what to do with our arguments that we do not care about

  // #DESTRUCTURING HELPS US WITH BOTH OF THESE PROBLEMS-----------------------------

  // 1 First Solution:

  // > Pass in an object instead

  //  -Order no longer matters.

  // function fetchRepos (language, minStars, maxStars, createdBefore, createAfter) {

  // }

  // fetchRepos({
  //   maxStars: null,
  //   createdAfter: null,
  //   createdBefore: new Date('01/01/2017').getTime(),
  //   minStars: 100,
  //   language: 'JavaScript'
  // });

  // Next we need to modify the fetchRepos function definition via DESTRUCTURING:----

  // function fetchRepos ({ language, minStars, maxStars, createdBefore, createAfter }) {

  // }

  // fetchRepos({
  //   maxStars: null,
  //   createdAfter: null,
  //   createdBefore: new Date('01/01/2017').getTime(),
  //   minStars: 100,
  //   language: 'JavaScript'
  // });

  // - biggest benefit here is that we have removed the order out of the equation
  // entirely

  // 2 Second Solution:

  // - We need to figure out what to do with the arguments we do not care about

  // > Just omit properties not needed

  // function fetchRepos ({ language, minStars, maxStars, createdBefore, createAfter }) {

  // }

  // fetchRepos({
  //   minStars: 100,
  //   language: 'JavaScript',
  //   createdBefore: new Date('01/01/2017').getTime()
  // });

  // #Default Values:---------------------------------------------------------------

  // > We need a way to establish default values for any properties that aren’t on the
  // arguments object when the function is invoked. Typically that would look like
  // this

  // - Old way:

  // function fetchRepos ({ language, minStars, maxStars, createdBefore, createAfter }) {
  //   language = language || All;
  //   minStars = minStars || 0;
  //   maxStars = maxStars || '';
  //   createdBefore = createdBefore || '';
  //   createdAfter = createdAfter || '';
  // }

  // fetchRepos({
  //   minStars: 100,
  //   language: 'JavaScript',
  //   createdBefore: new Date('01/01/2017').getTime()
  // });

  // - New way:

  // function fetchRepos({ language='All', minStars=0, maxStars='', createdBefore='', createdAfter='' }){

  // }

  // #Now lets do it with an array-------------------------------------------------

  // > BEFORE

  // function getUserData (player) {
  //   return Promise.all([
  //     // async functions
  //     getProfile(player),
  //     getRepos(player),
  //     getFollowers(player)
  //     // after promises resolve we invoke the function below
  //   ]).then(function (data) {
  //     // before destructure
  //     const profile = data[0];
  //     const repos = data[1];
  //     const followers = data[2];

  //     return {
  //       profile: profile,
  //       repos: repos,
  //       followers: followers
  //     }
  //   })
  // }

  // > FIRST UPDATE

  // function getUserData (player) {
  //   return Promise.all([
  //     getProfile(player),
  //     getRepos(player),
  //     getFollowers(player)
  //   ]).then(function (data) {
  //     // right here:
  //     const [ profile, repos, followers ] = data

  //     return {
  //       profile: profile,
  //       repos: repos,
  //       followers: followers
  //     }
  //   })
  // }

  //  > SECOND UPDATE

  // function getUserData (player) {
  //   return Promise.all([
  //     getProfile(player),
  //     getRepos(player),
  //     getFollowers(player)
  //     // Move the destructing into parameter itself
  //   ]).then(([ profile, repos, followers ]) => {

  //     return {
  //       profile: profile,
  //       repos: repos,
  //       followers: followers
  //     }
  //   })
  // }

  // Thats it!! Now your code is leaner and meaner! Thanks for reading,

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
