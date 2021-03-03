import { observer } from "mobx-react";
import movieStore from "../stores/movieStore";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const WatchList = () => {
  return (
    <h3>
      Watchlist <> </>
      <Badge pill variant="info">
        {" "}
        {movieStore.movieCount}{" "}
      </Badge>
    </h3>
  );
};

export default observer(WatchList);
