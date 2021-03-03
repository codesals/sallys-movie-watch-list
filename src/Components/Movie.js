import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import ListGroup from "react-bootstrap/ListGroup";

const Movie = () => {
  return movieStore.movies.map((movie) => {
    return <ListGroup.Item>{movie}</ListGroup.Item>;
  });
};

export default observer(Movie);
