import React, { useEffect, useState } from "react";
import Films from "./Components/Films";
import People from "./Components/People";

const App = () => {
  const [films, setFilms] = useState("");
  const [people, setPeople] = useState("");
  const [loadFilmCards, setLoadFilmCards] = useState(false);
  const [loadPeopleCards, setLoadPeopleCards] = useState(false);

  //   let loadFilmCards = false;
  //   let loadPeopleCards = false;

  // This useEffect runs only once (upon the first page-load) to fetch all info from the films & people APIs, then uses setState to update the variables to match the json objects from the APIs.
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((allFilms) => {
        console.log(allFilms);
        setFilms(allFilms);
      });

    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((allPeople) => {
        console.log(allPeople);
        setPeople(allPeople);
      });
  }, []);

  const handleFilmButtonClick = () => {
    console.log("Film Button Clicked");
    setLoadFilmCards(true)
  };

  const handlePeopleButtonClick = () => {
    console.log("People Button Clicked");
    setLoadPeopleCards(true)
  };

  const handleBackButtonClick = () => {
      console.log("Back button clicked");
      setLoadFilmCards(false)
      setLoadPeopleCards(false)

  }

  if (loadFilmCards) {
    return (
        <>
        <button className="btn btn-outline-danger m-3" onClick={handleBackButtonClick}>Back</button>
        {films.map((films) => <Films films={films} key={films.id}  />)}
        </>
        )
  } else if (loadPeopleCards) {
    return (
        <>
        <button className="btn btn-outline-danger m-3" onClick={handleBackButtonClick}>Back</button>
        {people.map((people) => <People people={people} key={people.id} />)}
        </>
    )
  } else {
    return (
      <>
        <div className="col-md-6 text-center">
          <button
            className="btn btn-outline-success m-3"
            onClick={handleFilmButtonClick}
          >
            Load Films
          </button>
        </div>
        <div className="col-md-6 text-center">
          <button
            className="btn btn-outline-success m-3"
            onClick={handlePeopleButtonClick}
          >
            Load People
          </button>
        </div>
      </>
    );
  }
};

export default App;
