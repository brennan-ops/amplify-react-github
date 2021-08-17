import logo from './Baby-Funny-Smile-Face-Image.jpeg';
import './App.css';

function App() {
  return (

    <div className="App">
      <div class="nav-bar">
        <div class="nav-element">1</div>
        <div class="nav-element">2</div>
        <div class="nav-element">3</div>
        <div class="nav-element">4</div>
      </div>

      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 class="header-animation">Animation</h1>
        <p>
          Amplify React App
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
    </div>
  );
}

export default App;
