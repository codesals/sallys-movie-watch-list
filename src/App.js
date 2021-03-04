import "bootstrap/dist/css/bootstrap.min.css";
import WatchList from "./Components/WatchList";
import { observer } from "mobx-react";
// import movieStore from "../src/stores/movieStore";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <input placeholder="Enter Movie Title" id="i" />
      <button onSubmit={(event) => movieStore.addMovie(event.target.value)}>
        Add
      </button> */}
      {/* {movieStore.addMovie("test")} */}
      <WatchList />
    </div>
  );
}

export default observer(App);
