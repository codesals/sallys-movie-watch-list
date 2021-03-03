import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Components/Movie";
import WatchList from "./Components/WatchList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <WatchList />
      <Movie />
    </div>
  );
}

export default App;
