import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Movie = () => {
  const unwatchedMovies = movieStore.movies.filter(
    (movie) => movie.watched === 0
  );
  return unwatchedMovies.map((movie) => {
    return (
      <ListGroup.Item>
        {movie.name}
        <Button
          variant="danger"
          size="sm"
          style={{ float: "right", margin: "1%" }}
          onClick={() => movieStore.deleteMovie(movie.id)}
        >
          Delete
        </Button>
        {/* Move to styles.js? onclick in Styles? */}
        <Button
          variant="info"
          size="sm"
          style={{ float: "right", margin: "1%" }}
          onClick={() => movieStore.toggleWatchMovie(movie.id)}
        >
          {movie.watched === 0 ? "Watched" : "Unwatch"}
        </Button>
      </ListGroup.Item>
    );
  });
};

export default observer(Movie);
