import movies from "../../src/movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;
  movieCount = movies.length;

  constructor() {
    makeAutoObservable(this);
  }
}

const movieStore = new MovieStore();

export default movieStore;
