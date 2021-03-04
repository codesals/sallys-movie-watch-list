import movies from "../../src/movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;
  // unwatchedMovies = this.movies.filter((movie) => movie.watched === 0);
  // watchedMovies = this.movies.filter((movie) => movie.watched === 1);

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
    // useState instead?
  };

  getCount = (status) => {
    return this.movies.filter((movie) => movie.watched === status).length;
  };

  // getCount = (list) => {
  //   return list.length;
  // };

  addMovie = (movieName) => {
    this.movies.push({
      id: this.movies.length - 1,
      name: movieName,
      watched: 0,
    });
  };

  findMovie = () => {
    //Search for movie
  };

  toggleWatchMovie = (movieId) => {
    if (this.movies[movieId].watched === 1) this.movies[movieId].watched = 0;
    else this.movies[movieId].watched = 1;
    // alert(this.movies[movieId].watched);
    // useState instead?
  };
}

const movieStore = new MovieStore();

export default movieStore;
