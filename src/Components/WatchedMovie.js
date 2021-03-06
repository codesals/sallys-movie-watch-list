import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const WatchedMovie = ({ queryWatched }) => {
  const watchedMovies = movieStore.movies.filter(
    (movie) => movie.watched === 1
  );

  const filteredWatchedMovies = watchedMovies.filter((movie) =>
    movie.name.toLowerCase().includes(queryWatched)
  );

  return filteredWatchedMovies.map((movie) => {
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
          onClick={() => {
            movieStore.toggleWatchMovie(movie.id);
            // alert(movie.watched);
          }}
        >
          {movie.watched === 0 ? "Watched" : "Unwatch"}
        </Button>
      </ListGroup.Item>
    );
  });
};

export default observer(WatchedMovie);
