import movies from "../../src/movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };

  // couldn't use in other class methods
  // isWatched = (movieId) => {
  //   return this.movies[movieId].watched === 1;
  // };

  toggleWatchMovie = (movieId) => {
    if (this.movies[movieId].watched === 1) this.movies[movieId].watched = 0;
    else this.movies[movieId].watched = 1;

    // alert(this.movies[movieId].watched);
    //use map/useState instead?
  };

  getCount = (status) => {
    return this.movies.filter((movie) => movie.watched === status).length;
  };

  addMovie = (movieName) => {
    this.movies.push({
      id: this.movies.length,
      name: movieName,
      watched: 0,
    });
  };
}

const movieStore = new MovieStore();

export default movieStore;
