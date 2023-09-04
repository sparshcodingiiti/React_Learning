import { Fragment } from 'react';
import './App.css';

const App = () => {
  const name = 'John';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing?name:"Someone!!!"}</h1>
    {name ?
    ( 
      <>
      <p>You are there</p>
      <p>and your name is {isNameShowing?" ":"not "}showing. </p>
      </>
    )
    
    :
    
    ( <>
      <p>You are not there</p>
      <p>and your name is {isNameShowing?" ":"not "}showing. </p>
      </>
    )}
    </div>
  );
}

export default App;

