import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
let apiUrl = "https://fakeFirebaseURL-default-rtdb.firebaseio.com/movies.json";
function App() {
  let [movies, setMovie] = useState([]);
  let [isloading, setIsloading] = useState(false);
  let [hasError, sethasError] = useState(false);

  let fetchMovieHandler = useCallback(async function () {
    try {
      sethasError(false);
      setIsloading(true);
      // let response = await fetch("https://swapi.dev/api/films");
      let response = await fetch(apiUrl);

      let data = await response.json();
      let dataResults = [];
      for (const key in data) {
        dataResults.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // let appmovies = data.results.map(function (element) {
      //   return {
      //     id: element.episode_id,
      //     title: element.title,
      //     openingText: element.opening_crawl,
      //     releaseDate: element.release_date,
      //   };
      // });
      setMovie((prevdata) => dataResults);
    } catch (error) {
      console.log("TC-721", error);
      sethasError(true);
    }
    setIsloading(false);

    // fetch("https://swapi.dev/api/films")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     let appmovies = data.results.map(function (element) {
    //       return {
    //         id: element.episode_id,
    //         title: element.title,
    //         openingText: element.opening_crawl,
    //         releaseDate: element.release_date,
    //       };
    //     });
    //     setMovie((prevdata) => appmovies);
    //     setIsloading(false);
    //   })
    //   .catch((error) => {
    //     setIsloading(false);
    //     sethasError(true);
    //   });
  });
  function addMovieHandler(movie) {
    setIsloading(true);
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
      // data: movie,
    })
      .then((response) => response.json())
      .then((data) => {
        fetchMovieHandler();

        console.log("TC-88", data);
      })
      .catch((error) => {
        setIsloading(false);
        sethasError(true);
      });
  }

  useEffect(function () {
    fetchMovieHandler();
  }, []);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {isloading && <p> Loading... </p>}
        {!isloading && !hasError && movies.length > 0 && (
          <MoviesList movies={movies} />
        )}
        {!movies.length > 0 && !isloading && !hasError && (
          <p> No movies Fetched </p>
        )}
        {hasError && <p> Something is wrong </p>}
      </section>
    </React.Fragment>
  );
}

export default App;
