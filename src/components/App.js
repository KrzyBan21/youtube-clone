import React, { useEffect } from "react";
import "./App.scss";
import SearchInput from "./SearchInput/SearchInput";
import FilmList from "./FilmList/FilmList";
import SelectedFilm from "./SelectedFilm/SelectedFilm";

import { Route, Switch } from "react-router-dom";

import { getFilms } from "../store/actions";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    props.getFilms();
  });

  return (
    <div className="App">
      <header className="header__section">
        <SearchInput />
      </header>
      <main className="main__section">
        <Switch>
          <Route path="/selected-film/:id" component={SelectedFilm} />
          <Route path="/" component={FilmList} />
        </Switch>
      </main>
    </div>
  );
};

export default connect(null, { getFilms })(App);
