import "bootstrap/dist/css/bootstrap.min.css";
import WatchList from "./Components/WatchList";
import { observer } from "mobx-react";
import movieStore from "../src/stores/movieStore";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./App.css";

function App() {
  const [movieToAdd, setMovieToAdd] = useState("");

  return (
    <div className="App">
      <h1> Sally's Movie Watch List</h1>
      <InputGroup className="mb-3" style={{ width: "18rem", margin: "auto" }}>
        {/* <form onKeyDown={(event) => setMovieToAdd(event.target.value)}> */}
        <FormControl
          placeholder="Title of Movie to Add"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(event) => {
            // event.preventDefault();
            setMovieToAdd(event.target.value);
          }}
        />
        <InputGroup.Append>
          <Button
            variant="success"
            onClick={() => {
              movieStore.addMovie(movieToAdd);
              // alert(
              //   movieStore.movies.map(
              //     (movie) => movie.name + movie.watched + movie.id
              //   )
              // );
            }}
          >
            {" "}
            + Add{" "}
          </Button>
        </InputGroup.Append>
        {/* </form> */}
      </InputGroup>
      <WatchList />
    </div>
  );
}

export default observer(App);
