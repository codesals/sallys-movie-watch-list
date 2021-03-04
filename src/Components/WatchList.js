import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import CardDeck from "react-bootstrap/CardDeck";
import Movie from "../Components/Movie";
import WatchedMovie from "../Components/WatchedMovie";
import { useState } from "react";

const WatchList = () => {
  const [queryUnwatched, setQueryUnwatched] = useState("");
  const [queryWatched, setQueryWatched] = useState("");

  return (
    <>
      <CardDeck style={{ width: "90%", margin: "auto", textAlign: "left" }}>
        <Card style={{ width: "18rem", margin: "2%" }}>
          <h4 style={{ padding: "2%" }}>
            Watchlist &nbsp;
            <Badge pill variant="info">
              {"" + movieStore.getCount(0) + ""}
            </Badge>
          </h4>
          <FormControl
            onChange={(event) => {
              event.preventDefault();
              setQueryUnwatched(event.target.value);
            }}
            placeholder="Search"
          />
          <ListGroup variant="flush">
            <Movie queryUnwatched={queryUnwatched} />
          </ListGroup>
        </Card>

        <Card style={{ width: "18rem", margin: "2%" }}>
          <h4 style={{ padding: "2%" }}>
            Watched &nbsp;
            <Badge pill variant="info">
              {"" + movieStore.getCount(1) + ""}
            </Badge>
          </h4>
          <FormControl
            onChange={(event) => {
              event.preventDefault();
              setQueryWatched(event.target.value);
            }}
            placeholder="Search"
          />
          <ListGroup variant="flush">
            <WatchedMovie queryWatched={queryWatched} />
          </ListGroup>
        </Card>
      </CardDeck>
    </>
  );
};

export default observer(WatchList);
