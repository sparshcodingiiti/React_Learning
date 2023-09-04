import { Fragment } from 'react';
import './App.css';

const Person = () => {
  return(
    <>
    <h1>Name: Sparsh</h1>
    <h1>Last Name: Arya</h1>
    <h1>Age: 24</h1>
    </>
  )
}
const App = () => {
  return (
    <div className="App">
      <Person/>
    </div>
  );
}

export default App;

