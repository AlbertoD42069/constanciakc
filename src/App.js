import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainKC from './MainKC';
import HomeKC from './homeKC/HomeKC';


function App() {
  return (
    <div className="App">
       <MainKC/>
    </div>
  );
}

export default App;
/*
 <MainKC/>
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
*/