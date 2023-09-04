import { Fragment } from 'react';
import './App.css';

const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h1>Last Name: {props.lastname}</h1>
    <h1>Age: {props.age}</h1>
    </>
  )
}
const App = () => {
  return (
    <div className="App">
      <Person name = "John" lastname = "doe" age = "30"/>
      <Person name = "Jane" lastname = "stone" age = "19"/>
      <Person name = "Jenny" lastname = "olson" age = "40"/>
    </div>
  );
}

export default App;

