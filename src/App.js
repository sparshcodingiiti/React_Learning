import './App.css';

const App = () => {
  const name = 'John';
  const isNameShowing = true;
  return (
    <div className="App">
    {name ?
    <p>You are there</p>: <p>You are not there</p>
    }
      <h1>Hello, {isNameShowing?name:"Someone!!!"}</h1>
    </div>
  );
}

export default App;

