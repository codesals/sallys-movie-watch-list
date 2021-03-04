import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Movie from "../Components/Movie";
import WatchedMovie from "../Components/WatchedMovie";

const WatchList = () => {
  return (
    <>
      <CardDeck style={{ width: "80%", margin: "auto" }}>
        <Card style={{ width: "18rem", margin: "2%" }}>
          <h4>
            Watchlist <> </>
            <Badge pill variant="info">
              {"" + movieStore.getCount(0) + ""}
            </Badge>
          </h4>
          <ListGroup variant="flush">
            <Movie />
          </ListGroup>
        </Card>

        <Card style={{ width: "18rem", margin: "2%" }}>
          <h4>
            Watched <> </>
            <Badge pill variant="info">
              {"" + movieStore.getCount(1) + ""}
            </Badge>
          </h4>
          <ListGroup variant="flush">
            <WatchedMovie />
          </ListGroup>
        </Card>
      </CardDeck>
    </>
  );
};

export default observer(WatchList);
