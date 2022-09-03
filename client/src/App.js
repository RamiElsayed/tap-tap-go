import logo from "./logo.svg";
import "./App.css";
import EventCard from "./components/EventCard";

function App() {
  const title = "test title";
  const description = "test description";
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
      <EventCard title={title} description={description} />
    </div>
  );
}

export default App;
