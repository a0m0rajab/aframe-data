import logo from './logo.svg';
import './App.css';
import 'aframe'
import './aframe'

function App() {
  return (
    <div className="App">
      <a-scene environment="preset: arches; shadow: true;"
        keyboard-shortcuts="enterVR: false;" >
        <a-sky src="./puydesancy.jpg" ></a-sky>
        <a-entity id="camera" camera
          position="0 1.6 0"
          rotate>
        </a-entity>
      </a-scene>
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
    </div>
  );
}

export default App;
