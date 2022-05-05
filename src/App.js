import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  const name = "Derrick Mwema";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        
      <h1>Hello, {name}</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Welcome name="Sara" />
      </body>
    </div>
  );
}

export default App;
