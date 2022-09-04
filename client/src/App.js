import logo from "./logo.svg";
import "./App.css";
import EventCard from "./components/EventCard";

function App() {
  const title = "Salsa with Fabian Sarango";
  const price = "From £15 per person";
  const value = 4;
  const nRatings = 254;

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
      <EventCard
        title={title}
        price={price}
        value={value}
        nRatings={nRatings}
      />
    </div>
  );
}

export default App;
